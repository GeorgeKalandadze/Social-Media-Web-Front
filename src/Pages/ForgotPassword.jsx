import React, { useState } from 'react';
import GuestLayout from '../Layouts/GuestLayout';
import LeftSide from '../Components/Auth/LeftSide';
import SocialImg from '../assets/social-people-image-3.jpg';
import RightSide from '../Components/Auth/RightSide';
import Input from '../Components/Auth/Input';
import { postRequest } from '../Axios/axiosClient';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      const response = await postRequest('/forgot-password', {email: email });
      setMessage(response.data.message); // Display the message received from the server
      setErrors({}); // Clear any previous errors if successful
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors); // Show any validation errors
      }
    }
  };

  return (
    <GuestLayout>
      <LeftSide
        bgImage={SocialImg}
        page={"Reset Password"}
        description={"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one"}
        span={'If you dont need to reset your password ?'}
        buttonText={'Log In'}
        link="/"
      />
      <RightSide className={"justify-center"}>
        <form className='flex flex-col gap-[30px]' onSubmit={handlePasswordReset}>
          <h1 className='text-[#555] font-bold text-[30px]'>Forgot Your Password</h1>
          <Input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <button type="submit" className="py-2 px-4 border-none bg-[#938ceb] text-white cursor-pointer">
            Email Password Reset Link
          </button>
          {message && <p className="text-green-600">{message}</p>}
        </form>
      </RightSide>
    </GuestLayout>
  );
};

export default ForgotPassword;
