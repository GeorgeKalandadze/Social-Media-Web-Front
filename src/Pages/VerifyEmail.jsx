import React from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-3.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'


const VerifyEmail= () => {

  return (
    <GuestLayout>
        <LeftSide 
            bgImage={SocialImg} 
            page={"Verify Your Email"}
            description={"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to  you? If you didn't receive the email, we will gladly send you another."} 
            span={'If you dont need resnd your Email verification notification?'}
            buttonText={'Log In'}
            link="/"
        />
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]'>
                <h1 className='text-[#555] font-bold text-[30px]'>Verify Your Email</h1>
            
                <button className=" py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
                    Resend Verification Email
                </button>
            </form>
        </RightSide>
    </GuestLayout>
  )
}

export default VerifyEmail
