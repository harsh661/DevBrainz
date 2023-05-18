import Image from 'next/image'
import React from 'react'

const Card = ({creator: {userName, email, image}, content, tag, created_at}) => {

  const created_date = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className='rounded-lg border p-5 shadow-md w-full bg-white'>
      <div className="flex w-full items-center justify-between border-b pb-3">
        <div className="flex items-center space-x-3">
          <Image
            src={image} 
            alt='user'
            referrerPolicy="no-referrer" 
            className="rounded-full bg-slate-400"
            width={40}
            height={40}
           />
          <div>
            <div className="md:text-lg font-bold text-dark-text">{userName}</div>
            <div className='text-zinc-500 text-xs md:text-sm'>{email}</div>
          </div>
        </div>

        <div className='text-dark-text md:text-base text-sm'>
          {tag}
        </div>

      </div>

      <div className="my-5 md:text-xl text-black">
        {content}
      </div>
      <div className='text-zinc-500'>
        {created_date}
      </div>
    </div> 
  )
}

export default Card