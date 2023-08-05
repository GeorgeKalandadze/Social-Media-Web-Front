import React from 'react'
import Navbar from './Navbar/Navbar'

const AuthenticatedLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default AuthenticatedLayout