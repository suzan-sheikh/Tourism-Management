import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import UseAuth from "../Hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const { googleLogin, setLoading, githubSignIn, loginUser } = UseAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        setLoading(false);
        toast.success("Login Successfully");
        if (result.user) navigate(form);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Email and Password not match");
        console.log(error);
      });
  };

  const handleSignIn = (socialProvider) => {
    socialProvider()
      .then((result) => {
        setLoading(false);
        toast.success("Login Successfully");
        if (result.user) navigate(form);
        reset()
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login failed");
        console.error(error);
      });
  };

  return (
    <div
      data-aos="zoom-in"
      className="max-w-7xl container px-8 lg:px-16 mx-auto text-center space-y-12 mb-4 mt-24"
    >
      <Helmet Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="w-full max-w-md rounded-md shadow-2xl p-4 mx-auto">
        <h2 className="mb-3 text-xl font-semibold text-center">
          Login to your account
        </h2>
        <div className="my-2 space-y-2">
          <button
            onClick={() => handleSignIn(googleLogin)}
            aria-label="Login with Google"
            type="button"
            className="text-gray-800 bg-gray-50 flex items-center justify-center w-full p-1 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-3 h-3 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-sm">Login with Google</p>
          </button>
          <button
            onClick={() => handleSignIn(githubSignIn)}
            aria-label="Login with GitHub"
            role="button"
            className="text-gray-800 bg-gray-50 flex items-center justify-center w-full p-1 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-3 h-3 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p className="text-sm">Login with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-2">
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourmail@abc.com"
                className="text-sm w-full px-3 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-primary">This field is required</span>
              )}
            </div>
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-center">
                  Password
                </label>
              </div>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                id="password"
                placeholder="*****"
                className="text-sm w-full px-3 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-8 right-4 cursor-pointer"
              >
                {showPassword ? (
                  <IoIosEyeOff className="text-2xl" />
                ) : (
                  <IoMdEye className="text-2xl" />
                )}
              </span>
              {errors.password && (
                <span className="text-primary">This field is required</span>
              )}
            </div>
            <p className="text-sm text-gray-600">
              Dont have account?
              <NavLink
                to="/register"
                href="#"
                rel="noopener noreferrer"
                className="focus:underline hover:underline hover:text-primary font-bold ml-2"
              >
                Register Now
              </NavLink>
            </p>
          </div>
          <input
            type="submit"
            value="Sign in"
            className="btn btn-sm text-white btn-secondary w-full bg-[#000000d5] border-none hover:bg-[#0000009c]"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
