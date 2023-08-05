import React, { useEffect } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Home/Post'


const Home = () => {

  return (
    <AuthenticatedLayout>
      <Post/>
    </AuthenticatedLayout>
  )
}

export default Home