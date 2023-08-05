import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'

const AuthenticatedLayout = ({children}) => {
  return (
    <div >
        <Navbar/>
        <div className='p-4 grid grid-cols-[18vw,auto,20vw] gap-x-8'>
            <LeftSide/>
            {children}
        </div>
    </div>
  )
}

export default AuthenticatedLayout