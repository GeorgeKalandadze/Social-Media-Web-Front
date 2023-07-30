import React from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-3.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'


const ForgotPassword = () => {

  return (
    <GuestLayout>
        <LeftSide 
            bgImage={SocialImg} 
            page={"Reset Password"}
            description={"Forgot your password? No problem. Just let us know your email  address and we will email you a password reset link that will allow you to choose a new one"  } 
            span={'If you dont need reset your password ?'}
            buttonText={'Log In'}
            link="/"
        />
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]'>
                <h1 className='text-[#555] font-bold text-[30px]'>Forgot Your Password</h1>
                <Input
                    placeholder="Enter Email"
                    type="email"
                />
                <button className=" py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
                    Email Password Reset Link
                </button>
            </form>
        </RightSide>
    </GuestLayout>
  )
}

export default ForgotPassword
