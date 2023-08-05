import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'

const AuthenticatedLayout = ({children}) => {
  return (
    <div >
        <Navbar/>
        <div className='p-4'>
            <LeftSide/>
        </div>
        {children}
    </div>
  )
}

export default AuthenticatedLayout