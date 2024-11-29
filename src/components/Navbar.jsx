import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-navbar.png';
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#8cbaf7] to-[#a1ecb5] shadow-lg fixed top-0 left-0 right-0 w-full z-10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Jobify" className="h-[5rem] w-auto hover:opacity-90 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end space-x-10 flex-1">
            <Link 
              to="/jobs" 
              className="text-[#08233d] hover:text-gray-200 font-medium text-[15px] transition-colors duration-200 flex items-center gap-2"
            >
              <CiSearch className="h-5 w-5" />
              Find Jobs
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setShowCareerDropdown(true)}
              onMouseLeave={() => setShowCareerDropdown(false)}
            >
              <Link 
                to="/my-career" 
                className="text-[#08233d] hover:text-gray-200 font-medium text-[15px] transition-colors duration-200 flex items-center gap-2"
              >
                <FaBriefcase className="h-5 w-5" />
                My Career
              </Link>
              
              {/* Dropdown Menu */}
              {showCareerDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/create-cv"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Create a CV
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/my-jobs" 
              className="text-[#08233d] hover:text-gray-200 font-medium text-[15px] transition-colors duration-200 flex items-center gap-2"
            >
              <CiHeart className="h-5 w-5" />
              My Jobs
            </Link>
            <Link 
              to="/resources" 
              className="text-[#08233d] hover:text-gray-200 font-medium text-[15px] transition-colors duration-200 mr-8 flex items-center gap-2"
            >
              <IoBookOutline className="h-5 w-5" />
              Resources
            </Link>
            <Link
              to="/register"
              className="text-[#08233d] hover:text-gray-200 font-medium text-[15px] transition-colors duration-200 flex items-center gap-2"
            >
              <MdOutlineAccountCircle className='h-[2rem] w-[2rem]' />
              Log In
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-gradient-to-r from-[#1A73E8] to-[#34A853] rounded-lg shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/jobs"
                className="block px-4 py-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <CiSearch className="h-5 w-5 mr-2" />
                  Find Jobs
                </div>
              </Link>
              <div 
                className="relative" 
                onMouseEnter={() => setShowCareerDropdown(true)}
                onMouseLeave={() => setShowCareerDropdown(false)}
              >
                <Link
                  to="/my-career"
                  className="block px-4 py-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <FaBriefcase className="h-5 w-5 mr-2" />
                  My Career
                </Link>
                
                {/* Dropdown Menu */}
                {showCareerDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/create-cv"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Create a CV
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/my-jobs"
                className="block px-4 py-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <CiHeart className="h-5 w-5 mr-2" />
                  My Jobs
                </div>
              </Link>
              <Link
                to="/resources"
                className="block px-4 py-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <IoBookOutline className="h-5 w-5 mr-2" />
                  Resources
                </div>
              </Link>
              <div className="border-t border-white/20 my-2"></div>
              <Link
                to="/register"
                className="block px-4 py-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200"
              >
                <div className="flex items-center justify-center">
                  <MdOutlineAccountCircle className="h-5 w-5 mr-2" />
                  <span>Log In</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
