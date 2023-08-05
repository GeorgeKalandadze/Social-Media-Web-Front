import React, { useEffect } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Post/Post'


const Home = () => {

  return (
    <AuthenticatedLayout>
      <Post/>
    </AuthenticatedLayout>
  )
}

export default Home