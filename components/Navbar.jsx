'use client'

import React, { useState } from 'react'

const Navbar = () => {

  const[nav, setNav] = useState(false)

  return (
    <nav className='flex justify-between items-center w-full text-dark-text font-semibold sm:px-6 px-3 py-3'>
        <div className='flex gap-2 items-center sm:text-2xl text-xl'>
            <img src="logo.png" alt="DevBraiz" className='w-12'/>
            <span className='pb-1'>DevBrainz</span>

            <ul className='md:flex hidden items-center text-base gap-6 px-10'>
              <li className='cursor-pointer underline_animate relative'>Top ideas</li>
              <li className='cursor-pointer underline_animate relative'>About us</li>
              <li className='cursor-pointer underline_animate relative'>Contact</li>
            </ul>
        </div>

        <div className='md:flex hidden items-center gap-4'>
            <span className='cursor-pointer underline_animate relative'>Log in</span>
            <span className='px-2 py-1 cursor-pointer border border-dark-text/50 rounded-md hover:text-white hover:bg-dark-text transition-all duration-300'>Get Started</span>
        </div>

        <div onClick={()=>setNav(prev=>!prev)} className={`md:hidden ${nav && 'rotate-90'} transition-all duration-300`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        
    </nav>
  )
}

export default Navbar