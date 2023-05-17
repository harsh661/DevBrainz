'use client'

import Form from '@components/Form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CreatePost = () => {
  const router = useRouter()
  const {data: session} = useSession()

  const[submitting, setSubmitting] = useState(false)
  const[post, setPost] = useState({
    content: '',
    tag: '',
  })

  const createPost = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Creating a post

    try {
      const response = await fetch('/api/post/new', {
        method: 'POST',
        body: JSON.stringify({
          content: post.content,
          userId: session?.user.id,
          tag: post.tag,
        })
      })

      if(response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col z-10">
        <header className="p-5 sm:p-10 flex flex-col gap-5">
          <h1 className="head_text text-3xl sm:text-5xl">
            Join the Idea Revolution: Share Your ideas, Transform the World!
          </h1>
        </header>

        <Form 
          type="Create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createPost}
        />
      </main>
    </section>
  )
}

export default CreatePost