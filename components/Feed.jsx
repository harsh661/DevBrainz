'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'


// List out all the post Cards in this element

const CardList = ({data, handleClick}) => {
  return (
    <div className='flex flex-col gap-10 w-full max-w-2xl mx-auto px-5 mb-20'>
      {data?.map((post) => (
        <Card 
          key={post._id}
          creator={post.creator}
          created_at={post.created_at}
          content={post.content}
          tag={post.tag}
        />
      ))}
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
    const res = await fetch('/api/post')
    const data = await res.json()
    console.log(data)
    setPosts(data)
  }

  return (
    <section className='bg-dark-bg text-white'>
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col">
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
            className='p-3 text-zinc-500 rounded-md'
            value={search}
            onChange={handleSearch} />
        </header>

        <CardList 
          data={posts}
          handleClick={() => {}}
        />
      </main>
    </section>
  )
}

export default Feed