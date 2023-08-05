import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'
import RightSide from '../Components/Home/RightSide'

const AuthenticatedLayout = ({children}) => {
  return (
    <div >
        <Navbar/>
        <div className='py-4 px-[100px] grid grid-cols-[18vw,auto,22vw] gap-x-8'>
            <LeftSide/>
            {children}
            <RightSide/>
        </div>
    </div>
  )
}

export default AuthenticatedLayout