'use client'

import Feed from "@components/Feed"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  const {data: session} = useSession()
  return (
    <section>
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col z-10">
        <header className="p-5 sm:p-10 flex flex-col gap-5">
          <h1 className="head_text text-5xl sm:text-7xl">
            Welcome to the ultimate platform <br/> to share and explore new ideas.
          </h1>
          <h3 className="sm:text-lg text-zinc-500">
            At DevBrainz, we believe that the most groundbreaking ideas often come from the wildest imaginations.<br/> Join our community and discover what can be achieved when creativity meets collaboration.
          </h3>
          {session?.user 
            ? <Link href='/create-post' className="py-3 px-8 my-3 bg-black text-white rounded-md cursor-pointer w-max">
                Create Post
              </Link>
            : <div className="py-3 px-8 my-3 bg-black text-white rounded-md cursor-pointer w-max">
                Get Started
              </div>
          }
          {/* Vector image for hero section */}
          <div className="flex w-full justify-center">
            <Image 
              src='/assets/images/hero.svg'
              alt='Developers discussing their ideas'
              width={800}
              height={800}
              className="hidden sm:block h-auto w-auto"
            />
          </div>
        </header>
      </main>
      <Feed />
    </section>
  )
}

export default Home