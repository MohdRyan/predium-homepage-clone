import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l from-sky-200 to-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-6 lg:py-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/663cb1b6bad828471393b1d6/663e28da0b78862520297d29_Logo%20Predium%5BDark%5D.svg"
            alt="Predium Logo"
            className="h-6 md:h-8"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-[70%] justify-between items-center text-indigo-950 font-medium">
          <div className="hidden  lg:flex w-[65%] justify-between items-center px-4 py-2 bg-white rounded-3xl ">
            <a href="#" className="hover:text-blue-600">
              Software
            </a>
            <a href="#" className="hover:text-blue-600">
              Predium AI
            </a>
            <div className="relative group">
              <button className="hover:text-blue-600">Solutions</button>
              <div className="absolute hidden group-hover:block z-10 bg-white bg-opacity-50 rounded-xl shadow-lg mt-1 w-[15rem]">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Purchase analysis
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Assets & Portfolio Management
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600 "
                >
                  Decarbonization Strategy
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Reporting
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Lending
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-600">Company</button>
              <div className="absolute hidden group-hover:block z-10 bg-white bg-opacity-50 rounded-xl shadow-lg mt-1  w-[10rem]">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-600">Resources</button>
              <div className="absolute hidden group-hover:block z-10 bg-white bg-opacity-50 rounded-xl shadow-lg mt-1  w-[10rem]">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Webinar
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Newsroom
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-blue-600">ENG</button>
              <div className="absolute hidden group-hover:block z-10 bg-white bg-opacity-50 rounded-xl shadow-lg mt-1  w-[10rem]">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  Hindi
                </a>
              </div>
            </div>
          </div>
          <div className="hidden  lg:flex w-[40%] justify-evenly items-center">
            <button className="px-4 py-2 bg-white text-indigo-950 hover:bg-blue-600 hover:text-white rounded-3xl">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-white hover:text-indigo-950 rounded-3xl">
              Arrange and exchange
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-4 rounded-full bg-white shadow-md"
          >
            <span className="sr-only">Open menu</span>
            <div className="h-0.5 w-5 bg-indigo-950 mb-1"></div>
            <div className="h-0.5 w-5 bg-indigo-950 mb-1"></div>
            <div className="h-0.5 w-5 bg-indigo-950"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden  bg-indigo-950 font-semibold text-white px-4 pb-4 text-xl ">
          <a href="#" className="block py-2 hover:text-blue-600 ">
            Software
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Predium AI
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Solutions
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Company
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Resources
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            ENG
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
