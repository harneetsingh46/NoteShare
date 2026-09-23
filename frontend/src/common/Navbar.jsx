import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight"
        >
          NoteShare
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          {/* Always visible */}
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-black transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-700 hover:text-black transition"
          >
            About
          </Link>


          {/* Only visible when logged in */}
          {isAuthenticated && (
            <>
              <Link
                to="/notes"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                Notes
              </Link>

              <Link
                to="/create-note"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                Create Note
              </Link>

              <Link
                to="/my-notes"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                My Notes
              </Link>
            </>
          )}


          {/* Authentication */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-3">

              {/* User name */}
              <span className="text-sm text-gray-600">
                {user?.name}
              </span>

              <button
                onClick={() => navigate("/signout")}
                className="border border-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Logout
              </button>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;