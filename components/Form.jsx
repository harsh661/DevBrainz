import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const Form = ({ type, post, submitting, handleSubmit, setPost }) => {
  return (
    <div className='flex flex-col w-full p-5 sm:p-10'>
        <div className='flex flex-col gap-3 z-10 p-5'>
            <h1 className='head_text text-2xl text-dark-text'>{type} Post</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <TextareaAutosize 
                    minRows={5}
                    className='glassmorphism outline-none border border-zinc-400 w-full rounded-md p-3 resize-none'
                    placeholder="What's on your mind?"
                    onChange={(e) => setPost({ ...post, content: e.target.value})}
                    required
                />
                <TextareaAutosize 
                    minRows={2}
                    className='glassmorphism outline-none border border-zinc-400 w-full rounded-md p-3 resize-none'
                    placeholder="Add relatable tags ( #tag1, #tag2... )"
                    onChange={(e) => setPost({ ...post, tag: e.target.value})}
                    required
                />
                <button 
                    type="submit" 
                    className='w-max px-2 py-1 cursor-pointer border border-dark-text/50 rounded-md text-white bg-dark-text'
                    >
                    Share post
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form