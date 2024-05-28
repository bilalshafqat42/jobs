import React from "react";
import myLogo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <div>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center jusitify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shirnk-0 items-center mr-4" to="/">
                <img src={myLogo} className="h-10 w-auto" alt="React jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    // className="text-white bg-black px-4  py-2 rounded-md"
                    className={linkClass}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    // className="text-white bg-black px-4  py-2 rounded-md"
                    className={linkClass}
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/add-job"
                    // className="text-white bg-black px-4  py-2 rounded-md"
                    className={linkClass}
                  >
                    Add Jobs
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
