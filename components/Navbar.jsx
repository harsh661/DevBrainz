'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const {data: session} = useSession()
  const[nav, setNav] = useState(false)
  const[providers, setProviders] = useState(null)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setProvider()
  }, [])

  return (
    <nav className={`fixed top-0 bg-white font-semibold flex justify-between items-center w-full text-dark-text sm:px-6 px-3 py-3`}>
        <div className='flex gap-2 items-center sm:text-2xl text-xl'>
            <Link href='/' className='flex items-center gap-2'>
              <img src="/assets/images/logo.png" alt="Logo" width={48}/>
              <span className='pb-1'>DevBrainz</span>
            </Link>

            <ul className='md:flex hidden items-center text-base gap-6 px-10'>
              <li className='cursor-pointer underline_animate relative'>Top ideas</li>
              <li className='cursor-pointer underline_animate relative'>About us</li>
              <li className='cursor-pointer underline_animate relative'>Contact</li>
            </ul>
        </div>

        {session?.user ? (
              // Show user image when logged in otherwise show Get Started button
          
              <div className='md:flex hidden items-center gap-4'>
                  <Link href='/create-post' className='cursor-pointer underline_animate relative'>Share an Idea</Link>
                  <Image 
                    src={session?.user.image}
                    width={40}
                    height={40}
                    alt="user"
                    referrerPolicy="no-referrer"
                    className='rounded-full'
                    onClick={()=>setNav(prev=>!prev)}
                  />  
              </div>
        ) : (
            <>
              {providers && Object.values(providers).map((provider) => (
                <div
                 className='md:flex hidden items-center gap-4'
                 key={provider.name}
                 onClick={() => signIn(provider.id)}>
                    <span className='px-2 py-1 cursor-pointer border border-dark-text/50 rounded-md hover:text-white hover:bg-dark-text transition-all duration-300'>Get Started</span>
                </div>
              ))}
            </>
        )}

        <div onClick={()=>setNav(prev=>!prev)} className={`md:hidden ${nav && 'rotate-90'} transition-all duration-300 z-50`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        {/* If navbar is open, show the mobile nav-menu */}

        {nav && (
          <aside className='navigation blurred_card flex flex-col gap-5 w-2/3 md:w-80 rounded-lg h-auto pt-20 md:pt-5 p-5 absolute top-20 md:top-20 right-3 md:right-6'>
            {session?.user
            ? (<>
                <Link href='/profile' onClick={()=>setNav(false)} className='flex items-center gap-2'>
                      <Image 
                        src={session?.user.image}
                        width={40}
                        height={40}
                        alt="user"
                        className='rounded-full'
                        referrerPolicy="no-referrer"
                      /> 
                      <span>{session?.user.name}</span>
                </Link>
                <span className='cursor-pointer'>Your Posts</span>
              </>)
            : (<>
                {providers && Object.values(providers).map((provider) => (
                  <div
                  className='flex items-center gap-4'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}>
                      <span className='px-2 py-1 cursor-pointer border border-dark-text/50 rounded-md hover:text-white hover:bg-dark-text transition-all duration-300'>Get Started</span>
                  </div>
                ))}
              </>)
            }
            <span className='mt-20 cursor-pointer'>Top Ideas</span>
            <span className='cursor-pointer'>About Us</span>
            <span className='cursor-pointer'>Contact</span>
            {/* SignOut button */}
            {session?.user && <span onClick={()=>signOut()} className='px-2 py-1 cursor-pointer border border-dark-text/50 w-max rounded-md hover:text-white hover:bg-dark-text transition-all duration-300'>Sign Out</span>}
          </aside> 
        )} 
    </nav>
  )
}

export default Navbar