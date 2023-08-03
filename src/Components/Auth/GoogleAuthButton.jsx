import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import axiosClient from '../../Axios/axiosClient';

const GoogleAuthButton = () => {
    const getGoogle = (e) => {
        e.preventDefault();
        axiosClient.get('auth/google').
        then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err) => {
            console.log(err)
        })
      }
  return (
    <button style={{border:"1.5px solid black"}} className="w-full flex gap-2 rounded px-2 py-3 justify-center font-medium" onClick={getGoogle}>
        <GoogleIcon/>
        Use Google acount
    </button>
  )
}

export default GoogleAuthButton
