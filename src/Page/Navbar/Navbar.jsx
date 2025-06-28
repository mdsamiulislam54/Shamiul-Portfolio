import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);

useEffect(()=>{
  const handleScroll = ()=>{
    setScrollY(window.scrollY);
  }

  window.addEventListener('scroll', handleScroll);
  return ()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[])


  const navItem = (

    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
  return (
    <div>
      <div className={` ${scrollY > 50 ? "fixed-nav bg-primary/80 text-white ":"bg-primary text-white shadow-sm "}`}>
        <div className=" flex py-4  w-11/12 mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-5 *:text-lg *:font-bold *:hover:text-secondary text-black"
              >
                {navItem}
                <div className="navbar-end">
                  <button className="btn border-none shadow-none text-white bg-secondary hover:text-black duration-500 transition-all  ">
                    Resume
                  </button>
                </div>
              </ul>
            </div>
            <Link className=" text-xl font-bold">Shamiul.</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-10 *:text-lg *:font-bold *:hover:text-secondary">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn border-none shadow-none text-white bg-secondary hover:text-black duration-500 transition-all  ">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
