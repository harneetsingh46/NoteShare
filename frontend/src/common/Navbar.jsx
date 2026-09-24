import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    navigate("/signout");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight"
          >
            NoteShare
          </Link>


          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">

            {/* Home */}
            <Link
              to="/"
              className="text-sm text-black hover:text-gray-500 transition"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-sm text-black hover:text-gray-500 transition"
            >
              About
            </Link>


            {/* AUTHENTICATED LINKS */}
            {isAuthenticated && (
              <>
                <Link
                  to="/notes"
                  className="text-sm text-black hover:text-gray-500 transition"
                >
                  Notes
                </Link>

                <Link
                  to="/createNote"
                  className="text-sm text-black hover:text-gray-500 transition"
                >
                  Create Note
                </Link>

                <Link
                  to="/my-notes"
                  className="text-sm text-black hover:text-gray-500 transition"
                >
                  My Notes
                </Link>
              </>
            )}


            {/* AUTH */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-3">

                <span className="text-sm text-gray-600">
                  Hi, {user?.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="border border-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  Logout
                </button>

              </div>
            )}

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 border border-gray-300 rounded-lg"
            aria-label="Toggle menu"
          >

            <span
              className={`block w-5 h-0.5 bg-black mx-auto transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />

            <span
              className={`block w-5 h-0.5 bg-black mx-auto transition-opacity ${menuOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`block w-5 h-0.5 bg-black mx-auto transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />

          </button>

        </div>


        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-5 pt-5 border-t border-gray-200">

            <div className="flex flex-col gap-2">

              {/* HOME */}
              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-sm text-black hover:bg-gray-100 transition"
              >
                Home
              </Link>


              {/* ABOUT */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-sm text-black hover:bg-gray-100 transition"
              >
                About
              </Link>


              {/* AUTHENTICATED LINKS */}
              {isAuthenticated && (
                <>
                  <Link
                    to="/notes"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg text-sm text-black hover:bg-gray-100 transition"
                  >
                    Notes
                  </Link>

                  <Link
                    to="/createNote"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg text-sm text-black hover:bg-gray-100 transition"
                  >
                    Create Note
                  </Link>

                  <Link
                    to="/my-notes"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg text-sm text-black hover:bg-gray-100 transition"
                  >
                    My Notes
                  </Link>
                </>
              )}


              {/* MOBILE AUTH */}
              <div className="pt-3 mt-2 border-t border-gray-200">

                {!isAuthenticated ? (

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block text-center bg-black text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Login
                  </Link>

                ) : (

                  <div className="space-y-3">

                    <div className="px-4 py-2 text-sm text-gray-600">
                      Hi, {user?.name}
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full border border-black px-4 py-3 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
                    >
                      Logout
                    </button>

                  </div>

                )}

              </div>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;