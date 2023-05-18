import React from 'react'
import Card from './Card'

const Profile = ({name, data, handleEdit, handleDelete}) => {
  return (
    <section>
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col z-10">
        <header className="p-5 sm:p-10 flex flex-col gap-5">
          <h1 className="head_text text-5xl sm:text-7xl">
            {name} Profile
          </h1>
          <h3 className="sm:text-lg text-zinc-500">
            At DevBrainz, we believe that the most groundbreaking ideas often come from the wildest imaginations.<br/> Join our community and discover what can be achieved when creativity meets collaboration.
          </h3>
          <h2 className='head_text text-4xl sm:text-6xl pt-20 pb-10'>Recent Posts</h2>
        </header>
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
      </main>
    </section>
  )
}

export default Profile