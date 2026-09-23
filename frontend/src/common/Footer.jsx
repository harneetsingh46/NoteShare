import React from 'react'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <>
      <footer className='border-t border-gray-700 mt-16 font-mono'>
        <div className='max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3'>

          <div className='text-sm font-semibold text-black'>
            NoteShare
          </div>

          <div className='text-xs text-gray-900'>
            © {year} NoteShare. All rights reserved.
          </div>

          <div className='text-xs text-gray-900'>
            Learn. Share. Grow.
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer