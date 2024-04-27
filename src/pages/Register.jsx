import {useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  
  const {createUser, updateUserProfile, setLoading} = useAuth();
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for navigation
  const navigate = useNavigate();
  const form = "/";

  const onSubmit = (data) => {
    const { email, password, name, imgUrl } = data;

    if (password.length < 6) {
      return toast.error("Password Must be 6 charset!");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      return toast.error(
        "Please provide one Lowercase and one Uppercase letter"
      );
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, imgUrl)
        .then(() => {
          setLoading(false);
          navigate(form);
          toast.success("Register Successfully");
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Already Register!");
        console.log(error.message);
      });
  };

  return (
    <div
      data-aos="zoom-in"
      className="mx-auto flex flex-col max-w-md rounded-md shadow-2xl p-4 container px-8 lg:px-16 text-center mt-24"
    >
      <Helmet Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="mb-4 text-center">
        <h1 className="my-1 text-xl font-bold">Register Now</h1>
        <p className="text-sm text-gray-600">
          Please Register For Your Account
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        action=""
        className="space-y-2"
      >
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name "
              className="w-full px-3 py-1 text-sm border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-primary">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourmail@abc.com"
              className="w-full px-3 py-1 text-sm border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-primary">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-3 py-1 text-sm border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              {...register("imgUrl", { required: true })}
            />
            {errors.imgUrl && (
              <span className="text-primary">This field is required</span>
            )}
          </div>
          <div className="relative">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-1 text-sm border rounded-md border-gray-300 bg-gray-50 text-gray-800"
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
        </div>
        <p className="text-sm text-center text-gray-600">
          You have a account?
          <NavLink
            to="/login"
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline hover:text-primary font-bold ml-2"
          >
            Login Now
          </NavLink>
        </p>
        <input
          type="submit"
          value="Register"
          className="btn btn-sm text-white btn-primary w-full bg-[#000000d5] border-none hover:bg-[#0000009c]"
        />
      </form>
    </div>
  );
};

export default Register;
