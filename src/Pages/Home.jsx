import React, { useEffect, useState } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Post/Post'


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosClient.get('/posts')
    .then((res) => {
      setPosts(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <AuthenticatedLayout>
      <div className='flex flex-col gap-6'>
        {posts.map((post) => (
          <Post
            props={post}
          />
        ))}
      </div>
    </AuthenticatedLayout>
  )
}

export default Home