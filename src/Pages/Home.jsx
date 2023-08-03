import React, { useEffect } from 'react'
import axiosClient from '../Axios/axiosClient'


const Home = () => {
  useEffect(() => {
    axiosClient.get('/user')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])


  return (
    <div>Home change language</div>
  )
}

export default Home