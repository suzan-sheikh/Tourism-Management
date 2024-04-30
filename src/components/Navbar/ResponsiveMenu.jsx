import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import UseAuth from "../../Hooks/useAuth";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { user, logout } = UseAuth();

  // NavLink
  const navLink = (
    <>
      <li className="py-1">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/allPlace"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/addTourist"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>

      <li className="py-1">
        <NavLink
          to="/myList"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          MY LIST
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-secondary px-8 pb-6 pt-4 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="w-full relative">
          <button
            onClick={() => setShowMenu(false)}
            className="btn btn-sm btn-primary bg-red-600 right-0 top-0 absolute text-white w-1/12"
          >
            X
          </button>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="rounded-full cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
            </div>
            <button
              className="btn btn-sm btn-neutral text-white"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button
                onClick={() => setShowMenu(false)}
                className="btn btn-sm btn-neutral text-white"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                onClick={() => setShowMenu(false)}
                className="btn btn-sm btn-neutral text-white"
              >
                Register
              </button>
            </Link>
          </div>
        )}

        <nav className="mt-5">
          <ul className="space-y-1 text-md text-white">{navLink}</ul>
        </nav>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.func,
  setShowMenu: PropTypes.func,
};
export default ResponsiveMenu;
