import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Navbar() {
  const { user, duser, logOut } = useContext(AuthContext);

  const navItems = (
    <>
      <li className=" mx-4">
        <NavLink to={""}> Home</NavLink>
      </li>
      <li className=" mx-4">
        <NavLink to={"/addproduct"}> Add Product</NavLink>
      </li>
      <li className=" mx-4">
        <NavLink to={"/addcart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  const navItems2 = (
    <>
      <li>
        <div className="flex w-40 mx-3 lg:hidden ">
          <h1 className=" w-1/2">{duser?.name}</h1>
          <img
            className=" self-center rounded-full w-10 h-10"
            src={duser?.url}
            alt=""
          />
        </div>
      </li>
      <li>
        <NavLink to={""}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}> Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/addcart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar font-medium bg-[#00000005]">
        <div className="navbar-start">
          <a className="normal-case text-3xl inline text-green-400">
            <span className=" text-red-400 font-extrabold">T</span>ech
            <span className=" text-red-400 font-extrabold m-0 p-0">H</span>ub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="lg:flex w-40 mx-3 hidden ">
              <h1 className=" w-1/2">{duser?.name}</h1>
              <img
                className=" self-center rounded-full w-10 h-10"
                src={duser?.url}
                alt=""
              />
            </div>
          )}
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
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
                className="menu right-0 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems2}
                <li>
                  {/* <a>LOGOUT</a> */}
                  {user ? (
                    <button onClick={() => logOut()}>LogOut</button>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>
              </ul>
            </div>
            {/* <a className="btn hidden md:flex">LOGOUT</a> */}
            <div className=" hidden btn lg:flex">
              {user ? (
                <button onClick={() => logOut()}>LogOut</button>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
