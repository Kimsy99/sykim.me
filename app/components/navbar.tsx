import React from "react";
import { Link } from "remix";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const toggleMount = () => {
    setMounted(!mounted);
  };
  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="font-display relative flex flex-wrap items-center py-2 px-4 sm:px-8 z-10">
      <div className="container max-w-screen-lg mx-auto flex flex-wrap items-center">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            {/* <a className="my-auto text-3xl logo-title text-white">sykim</a> */}
            <a className="my-auto text-3xl logo-title text-white">
              <img
                src="/svg/kim-signature.svg"
                alt=""
                className="h-20 fill-current hover:text-yellow-500"
              />
            </a>
          </Link>
          <div className="flex">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="lg:hidden"
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="#111111"
                    stroke="#111111"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button
              className="block lg:hidden ml-4 z-20"
              onClick={() => toggleNav()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blueGray-500"
              >
                {navbarOpen ? (
                  <path
                    stroke="#a9adc1"
                    fill="#a9adc1"
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                  ></path>
                ) : (
                  <>
                    <path
                      d="M6 8.72656H18.2182"
                      stroke="#a9adc1"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.2182 15.709H6"
                      stroke="#a9adc1"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${navbarOpen ? " flex" : " hidden"}
					lg:flex lg:ml-auto lg:block hidden
					`}
        >
          {/* Full */}
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto md:pt-2 sm:pt-2 md:ml-0 sm:ml-0">
            <li>
              <Link to="/blog">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Work
                </a>
              </Link>
            </li>
            <li>
              <Link to="/skill">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Skill
                </a>
              </Link>
            </li>
            {/* <li>
              <Link to="/notes">
                <a className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white">
                  Notes
                </a>
              </Link>
            </li> */}
            <li>
              <Link to="/about">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <a href="https://timeline.sykim.me">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-lg font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Timeline
                </a>
              </a>
            </li>
          </ul>
        </div>
        {/* Burger nav */}
        <div
          className={`${navbarOpen ? " flex" : " hidden"}
					lg:flex lg:ml-auto lg:hidden z-10 backdrop-filter backdrop-blur-lg  fixed pin pt-24
					`}
          onClick={toggleNav}
        >
          <ul className="flex flex-col text-center lg:flex-row list-none lg:ml-auto md:pt-2 sm:pt-2 ml-10">
            <li>
              <Link to="/blog">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Work
                </a>
              </Link>
            </li>
            <li>
              <Link to="/skill">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Skill
                </a>
              </Link>
            </li>
            {/* <li>
              <Link to="/notes">
                <a className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white">
                  Notes
                </a>
              </Link>
            </li> */}
            <li>
              <Link to="/about">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <a href="https://timeline.sykim.me">
                <a
                  className="text-blueGray-500 flex items-center px-6 sm:px-0 md:px-2 py-2 underlined block  whitespace-nowrap text-2xl font-medium focus:outline-none hover:text-white"
                  onClick={toggleNav}
                >
                  Timeline
                </a>
              </a>
            </li>
          </ul>
        </div>

        <div className="hover:opacity-75 md:hidden sm:hidden">
          <button aria-label="Toggle Dark Mode" type="button" className="">
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-5 w-5 text-blueGray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
