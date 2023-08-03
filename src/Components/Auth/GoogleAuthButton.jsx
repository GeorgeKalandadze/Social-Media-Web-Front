import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const GoogleAuthButton = () => {

  return (
    <Link to={`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`} style={{border:"1.5px solid black"}} className="w-full flex gap-2 rounded px-2 py-3 justify-center font-medium">
        <GoogleIcon/>
        Use Google acount
    
    </Link>
  )
}

export default GoogleAuthButton
