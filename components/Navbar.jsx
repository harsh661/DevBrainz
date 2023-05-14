import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full text-dark-text font-semibold sm:px-6 px-3 py-3'>
        <div className='flex gap-2 items-center sm:text-2xl text-xl'>
            <img src="logo.png" alt="DevBraiz" className='w-12'/>
            DevBrainz
        </div>

        <div className='md:flex hidden items-center gap-4'>
            <span className='cursor-pointer'>Log in</span>
            <span className='px-2 py-1 cursor-pointer border border-dark-text/50 rounded-md'>Get Started</span>
        </div>
    </nav>
  )
}

export default Navbar