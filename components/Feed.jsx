'use client'

import React, { useEffect, useState } from 'react'

const CardList = ({data, handleClick}) => {
  return (
    <div className='flex flex-col max-w-2xl bg-red-500 mx-auto'>

    </div>
  )
}

const Feed = () => {

  const[search, setSearch] = useState('')
  const[posts, setPosts] = useState([])

  useEffect(() => {
    fetchPost()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const fetchPost = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()

    setPosts(data)
  }

  return (
    <section className='bg-dark-bg text-white'>
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col z-10">
        <header className="px-5 py-20 sm:px-10 flex flex-col gap-5">
          <h1 className="head_text text-4xl sm:text-6xl">
            Discover great ideas <br/> from people like you.
          </h1>
          <h3 className="sm:text-lg text-zinc-500">
            At DevBrainz, we believe that the most groundbreaking ideas often come from the wildest imaginations.<br/> Join our community and discover what can be achieved when creativity meets collaboration.
          </h3>
          <input 
            type="text"
            placeholder='Search Tags or Username'
            className='p-3 text-zinc-500 rounded-md blurred_card'
            value={search}
            onChange={handleSearch} />
        </header>

        <CardList 
          data={[]}
          handleClick={() => {}}
        />
      </main>
    </section>
  )
}

export default Feed