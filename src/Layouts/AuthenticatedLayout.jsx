import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'

const AuthenticatedLayout = ({children}) => {
  return (
    <div >
        <Navbar/>
        <div className='py-4 px-[100px] grid grid-cols-[18vw,auto,20vw] gap-x-8'>
            <LeftSide/>
            {children}
            <LeftSide/>
        </div>
    </div>
  )
}

export default AuthenticatedLayout