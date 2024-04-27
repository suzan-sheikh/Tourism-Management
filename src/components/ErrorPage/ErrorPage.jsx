import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="w-96">
            <img
              className="w-full"
              src="https://cdn.dribbble.com/userupload/12609824/file/original-0ebf1e6c9a64bfe1510cf8d72de99185.gif"
              alt=""
            />
          </div>
          <div className="max-w-md text-center">
            <h2 className="mb-1 font-extrabold text-6xl">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="mt-4 mb-8 text-gray-600">
              you can switch our Homepage.
            </p>
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-base-300 font-semibold rounded bg-lime-600"
            >
              GO BACK HOME
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
