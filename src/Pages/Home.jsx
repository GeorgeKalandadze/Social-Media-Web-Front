import React, { useEffect } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Post/Post'


const Home = () => {
  useEffect(() => {
    axiosClient.get('/posts')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <AuthenticatedLayout>
      <div className='flex flex-col gap-6'>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </AuthenticatedLayout>
  )
}

export default Home