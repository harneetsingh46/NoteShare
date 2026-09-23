import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-white text-black italic overflow-hidden'>

      {/* Hero */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24'>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>

          {/* Left */}
          <div className='animate-[fadeIn_0.8s_ease-out]'>

            <div className='inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 text-xs text-gray-900 mb-7'>
              <span className='w-2 h-2 bg-black rounded-full'></span>
              Built for students
            </div>

            <h1 className='text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]'>
              Your notes.
              <br />
              <span className='text-gray-400'>
                Shared better.
              </span>
            </h1>

            <p className='text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mt-7'>
              NoteShare makes it simple to share, discover,
              and organize study notes with other students.
            </p>

            <div className='flex flex-wrap gap-4 mt-9'>

              <Link
                to='/register'
                className='bg-black text-white px-6 py-3.5 rounded-lg font-medium hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300'
              >
                Get Started
              </Link>

              <Link
                to='/notes'
                className='border border-black px-6 py-3.5 rounded-lg font-medium hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300'
              >
                Explore Notes
              </Link>

            </div>

          </div>


          {/* Right */}
          <div className='relative animate-[fadeIn_1s_ease-out]'>

            {/* Main Card */}
            <div className='bg-black text-white rounded-3xl p-7 md:p-9 shadow-2xl hover:-translate-y-2 transition-transform duration-500'>

              <div className='flex items-center justify-between mb-10'>

                <div>
                  <p className='text-gray-500 text-xs uppercase tracking-[0.2em]'>
                    NoteShare
                  </p>

                  <h2 className='text-2xl font-semibold mt-2'>
                    Study smarter.
                  </h2>
                </div>

                <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center'>
                  →
                </div>

              </div>


              {/* Fake Notes */}
              <div className='space-y-3'>

                <div className='bg-white text-black rounded-xl p-5 hover:translate-x-2 transition-transform duration-300'>

                  <div className='flex justify-between items-start'>

                    <div>
                      <p className='text-xs text-gray-900'>
                        Computer Science
                      </p>

                      <h3 className='font-semibold mt-1'>
                        Data Structures
                      </h3>
                    </div>

                    <span className='text-xs text-gray-900'>
                      PDF
                    </span>

                  </div>

                </div>


                <div className='bg-gray-900 border border-gray-800 rounded-xl p-5 hover:translate-x-2 transition-transform duration-300'>

                  <p className='text-xs text-gray-300'>
                    Mathematics
                  </p>

                  <h3 className='font-semibold mt-1'>
                    Linear Algebra
                  </h3>

                </div>


                <div className='bg-gray-900 border border-gray-800 rounded-xl p-5 hover:translate-x-2 transition-transform duration-300'>

                  <p className='text-xs text-gray-300'>
                    Operating Systems
                  </p>

                  <h3 className='font-semibold mt-1'>
                    Process Management
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Divider */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='border-t border-gray-900'></div>
      </div>


      {/* Features */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-24'>

        <div className='max-w-2xl mb-14'>

          <p className='text-xs font-semibold tracking-[0.25em] uppercase text-gray-900'>
            Simple by design
          </p>

          <h2 className='text-3xl md:text-4xl font-semibold tracking-tight mt-4'>
            Everything you need to study together.
          </h2>

        </div>


        <div className='grid md:grid-cols-3 gap-5'>

          {/* Card 1 */}
          <div className='group bg-black text-white rounded-2xl p-8 min-h-[250px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>

            <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300'>
              ↑
            </div>

            <h3 className='text-xl font-semibold mt-8'>
              Share notes
            </h3>

            <p className='text-gray-500 text-sm leading-relaxed mt-3'>
              Upload and share useful study material
              with your classmates.
            </p>

          </div>


          {/* Card 2 */}
          <div className='group bg-black text-white rounded-2xl p-8 min-h-[250px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>

            <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300'>
              ⌕
            </div>

            <h3 className='text-xl font-semibold mt-8'>
              Find notes
            </h3>

            <p className='text-gray-500 text-sm leading-relaxed mt-3'>
              Discover notes from other students
              whenever you need them.
            </p>

          </div>


          {/* Card 3 */}
          <div className='group bg-black text-white rounded-2xl p-8 min-h-[250px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>

            <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300'>
              ✓
            </div>

            <h3 className='text-xl font-semibold mt-8'>
              Learn together
            </h3>

            <p className='text-gray-500 text-sm leading-relaxed mt-3'>
              Build a shared collection of useful
              resources and learn together.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 pb-24'>

        <div className='bg-black text-white rounded-3xl p-10 md:p-16 text-center hover:shadow-2xl transition-shadow duration-500'>

          <p className='text-xs text-gray-500 uppercase tracking-[0.25em]'>
            Start sharing
          </p>

          <h2 className='text-4xl md:text-5xl font-semibold tracking-tight mt-5'>
            Have notes?
            <br />
            Share them.
          </h2>

          <p className='text-gray-500 max-w-md mx-auto mt-5'>
            Help another student find the notes they need.
          </p>

          <Link
            to='/register'
            className='inline-block mt-8 bg-white text-black px-7 py-3.5 rounded-lg font-medium hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300'
          >
            Create an account
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home