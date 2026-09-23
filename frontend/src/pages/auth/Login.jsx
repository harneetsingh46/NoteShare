import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';
import apiClient from "../../ApiClient/interceptor.js"

const Login = () => {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })

    if (error) {
      setError("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(loginData);
      setLoginData({ email: "", password: "" });
      navigate("/notes");
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to sign in. Check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='min-h-screen bg-white text-black flex mt-5'>

        {/* Left Side */}
        <div className='hidden lg:flex lg:w-1/2 bg-black text-white p-12 xl:p-16 flex-col justify-between ml-9 rounded-xl'>

          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              NoteShare
            </h1>
          </div>

          <div className='max-w-lg'>

            <div className='w-12 h-[2px] bg-white mb-8'></div>

            <h2 className='text-5xl xl:text-6xl font-semibold tracking-tight leading-tight'>
              Share notes.
              <br />
              Learn together.
            </h2>

            <p className='text-gray-400 text-lg mt-6 leading-relaxed max-w-md'>
              A simple place for students to share useful notes,
              discover study material, and learn from each other.
            </p>

            <div className='mt-12 space-y-7'>

              <div className='flex items-start gap-4'>

                <div className='w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center'>
                  ✓
                </div>

                <div>
                  <h3 className='font-semibold'>
                    Share your knowledge
                  </h3>

                  <p className='text-gray-500 text-sm mt-1'>
                    Upload and share notes with your classmates.
                  </p>
                </div>

              </div>


              <div className='flex items-start gap-4'>

                <div className='w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center'>
                  +
                </div>

                <div>
                  <h3 className='font-semibold'>
                    Find useful notes
                  </h3>

                  <p className='text-gray-500 text-sm mt-1'>
                    Discover notes shared by other students.
                  </p>
                </div>

              </div>


              <div className='flex items-start gap-4'>

                <div className='w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center'>
                  •
                </div>

                <div>
                  <h3 className='font-semibold'>
                    Keep learning
                  </h3>

                  <p className='text-gray-500 text-sm mt-1'>
                    Keep your study material organized in one place.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <p className='text-gray-600 text-xs tracking-[0.25em] uppercase'>
            Learn. Share. Grow.
          </p>

        </div>


        {/* Right Side */}
        <div className='w-full lg:w-1/2 flex items-center justify-center px-6 py-10 mr-9 rounded-xl'>

          <div className='w-full max-w-md'>


            {/* Top Register Link */}
            <div className='flex justify-end items-center gap-4 mb-14'>

              <span className='text-sm text-gray-500'>
                Don't have an account?
              </span>

              <Link
                to='/register'
                className='border border-black rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition duration-200'
              >
                Register
              </Link>

            </div>


            {/* Heading */}
            <div className='mb-9'>

              <p className='text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3'>
                Welcome Back
              </p>

              <h1 className='text-4xl md:text-5xl font-semibold tracking-tight'>
                Welcome back
              </h1>

              <p className='text-gray-500 mt-3'>
                Log in to access your notes and study resources.
              </p>

            </div>


            {/* Form */}
            <div>

              <form
                onSubmit={handleSubmit}
                className='space-y-5'
              >

                {/* Email */}
                <div>

                  <label className='block text-sm font-medium mb-2'>
                    Email Address
                  </label>

                  <input
                    type='email'
                    placeholder='you@example.com'
                    name='email'
                    value={loginData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none bg-white text-black placeholder-gray-400 focus:border-black transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  />

                </div>


                {/* Password */}
                <div>

                  <label className='block text-sm font-medium mb-2'>
                    Password
                  </label>

                  <input
                    type='password'
                    placeholder='Enter your password'
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none bg-white text-black placeholder-gray-400 focus:border-black transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  />

                </div>


                {/* Error */}
                {error && (
                  <div className='border border-red-200 bg-red-50 text-red-600 rounded-lg px-4 py-3 text-sm'>
                    {error}
                  </div>
                )}


                {/* Submit */}
                <input
                  type='submit'
                  value={loading ? 'Logging in...' : 'Login'}
                  disabled={loading}
                  className='w-full bg-black text-white rounded-lg py-3.5 font-medium cursor-pointer hover:bg-gray-800 transition duration-200 mt-2 disabled:bg-gray-500 disabled:cursor-not-allowed'
                />

              </form>


              {/* Register */}
              <div className='text-center mt-7'>

                <p className='text-sm text-gray-500'>
                  Don't have an account?{" "}

                  <Link
                    to='/register'
                    className='text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition'
                  >
                    Create one
                  </Link>
                </p>

              </div>

            </div>


            {/* Bottom */}
            <p className='text-center text-xs text-gray-400 mt-12'>
              Your notes, your learning, your community.
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login