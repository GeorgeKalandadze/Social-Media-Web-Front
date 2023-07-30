import React from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-2.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'


const Register = () => {
  return (
    <GuestLayout className={"flex-row-reverse"}>
        <LeftSide bgImage={SocialImg}/>
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]'>
                <h1 className='text-[#555] font-bold text-[30px]'>Sign Up</h1>
                <Input
                    placeholder="Enter Name"
                    type="text"
                />
                <Input
                    placeholder="Enter Email"
                    type="email"
                />
                <Input
                    placeholder="Enter Password"
                    type="password"
                />
                <Input
                    placeholder="Enter Password confirmation"
                    type="password"
                />
                <button className="w-1/2 py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
                    Click Me
                </button>
            </form>
        </RightSide>
    </GuestLayout>
  )
}

export default Register