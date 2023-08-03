import React, { useEffect } from 'react'
import axiosClient from '../Axios/axiosClient'

const LoginWithGoogle = () => {
    useEffect(() => {
        axiosClient.get('auth/google/callback').
        then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    },[])
  return (
    <div>
        please wait
    </div>
  )
}

export default LoginWithGoogle