import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext"

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className='w-full bg-white text-black border-b border-gray-200 sticky top-0 z-50 bg-white shadow'>

      <div className='max-w-7xl mx-auto px-5 lg:px-8'>

        <div className='h-20 flex items-center justify-between'>

          {/* Logo */}
          <Link
            to='/'
            className='text-2xl font-bold tracking-tight'
          >
            NoteShare
          </Link>


          {/* Navigation */}
          <div className='hidden md:flex items-center gap-8'>

            <Link
              to='/'
              className='text-sm font-medium text-gray-600 hover:text-black transition'
            >
              Home
            </Link>

            <Link
              to='/createNote'
              className='text-sm font-medium text-gray-600 hover:text-black transition'
            >
              Create Note
            </Link>
            
            <Link
              to='/notes'
              className='text-sm font-medium text-gray-600 hover:text-black transition'
            >
              Notes
            </Link>

            <Link
              to='/about'
              className='text-sm font-medium text-gray-600 hover:text-black transition'
            >
              About
            </Link>

          </div>


          {/* Auth Buttons */}
          <div className='hidden md:flex items-center gap-3'>
            {isAuthenticated ? (
              <>
                <span className="welcome-text">Hi, {user.email}</span>
                <Link className='px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition' to="/signout">Sign Out</Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-2 text-sm font-medium hover:text-gray-600 transition'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition'
                >
                  Get Started
                </Link>
              </>
            )}




          </div>


          {/* Mobile Button */}
          <button className='md:hidden border border-gray-300 rounded-lg px-3 py-2'>
            ☰
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar