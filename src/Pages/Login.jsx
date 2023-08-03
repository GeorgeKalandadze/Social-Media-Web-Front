import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GuestLayout from '../Layouts/GuestLayout';
import LeftSide from '../Components/Auth/LeftSide';
import SocialImg from '../assets/social-people-image-1.jpg';
import RightSide from '../Components/Auth/RightSide';
import Input from '../Components/Auth/Input';
import { postRequest } from '../Axios/axiosClient';
import GoogleAuthButton from '../Components/Auth/GoogleAuthButton';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const data = { email: email, password: password };
        const response = await postRequest("/login", data);
        if(response.status === 200){
          navigate('/home')
        }
      } catch (error) {
        if (error.response && error.response.data) {
            const { errors: validationErrors } = error.response.data;
            setErrors(validationErrors);
          } else {
            console.error("Error posting data:", error);
          }
      }
  };


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
        <form className='flex flex-col gap-[30px] items-center w-full' onSubmit={handleLogin}>
          <h1 className='text-[#555] font-bold text-[30px]'>Login</h1>
          <Input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <button type="submit" className="w-full py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
            Log In
          </button>
          <GoogleAuthButton/>
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

export default Login;
