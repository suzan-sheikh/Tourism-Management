import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  // NavLink
  const navLink = (
    <>
      <li className="py-4">
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

      <li className="py-4">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-4 border-primary" : "border-none"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>

      <li className="py-4">
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
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-secondary px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">{navLink}</ul>
        </nav>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.func,
  setShowMenu: PropTypes.func,
}
export default ResponsiveMenu;
