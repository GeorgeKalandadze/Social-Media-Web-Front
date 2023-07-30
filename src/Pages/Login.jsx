import React from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-1.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <GuestLayout>
        <LeftSide 
            bgImage={SocialImg} 
            page={"Log in"}
            description={'Register to our social platform and enjoy your life, here you can see many funny news'}
            span={'You are not registered?'}
            buttonText={'Sign Up'}
            link="/register"
        />
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]'>
                <h1 className='text-[#555] font-bold text-[30px]'>Login</h1>
                <Input
                    placeholder="Enter Email"
                    type="email"
                />
                <Input
                    placeholder="Enter Password"
                    type="password"
                />
                <button className="w-1/2 py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
                    Click Me
                </button>
                <Link
                    to={'/forgot-password'}
                    className="underline text-sm text-[#938ceb] hover:text-gray-900 rounded-md "
                >
                    Forgot your password?
                </Link>
            </form>
        </RightSide>
    </GuestLayout>
  )
}

export default Login
