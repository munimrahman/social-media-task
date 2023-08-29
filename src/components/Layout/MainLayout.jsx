import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import avatar from "../../assets/avatar.png";

const MainLayout = () => {
  const isLoggedIn = useAuth();
  const dispatch = useDispatch();
  const { user: { profilePhoto } = {} } = useSelector((state) => state.auth);

  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/media"}>Media</Link>
      </li>
      {/* <li>
        <Link to={"/messages"}>Messages</Link>
      </li> */}
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </>
  );

  return (
    <main className="bg-[#F4F4F4]">
      <div className="navbar bg-base-100 border-b shadow-sm px-0 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="w-3/5">
            <Link to={"/"}>
              <img src={logo} className="" alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {!isLoggedIn && (
            <>
              <Link className="mr-3 sm:hidden" to="/log-in">
                <button className="btn btn-outline btn-xs">Get Started</button>
              </Link>
              <Link className="mr-3 hidden sm:block" to="/sign-up">
                <button className="btn btn-outline">Register</button>
              </Link>
              <Link className="hidden sm:block" to="/log-in">
                <button className="btn btn-neutral">LogIn</button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle hover:outline-none avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={profilePhoto || avatar} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/about"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <span onClick={() => dispatch(userLoggedOut())}>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
