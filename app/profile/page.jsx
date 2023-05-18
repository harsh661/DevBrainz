'use client'

import React, {useState, useEffect} from 'react'
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {
    const {data: session} = useSession()
    const[posts, setPosts] = useState([])

    useEffect(() => {
      const fetchPost = async () => {
        const res = await fetch(`/api/user/${session?.user.id}/posts`)
        const data = await res.json()
        console.log(data)
        setPosts(data)
      }
      
      if(session?.user.id) fetchPost()
    }, [])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }
  return (
    <Profile 
        name="My"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default ProfilePage