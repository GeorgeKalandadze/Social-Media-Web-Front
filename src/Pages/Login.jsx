import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GuestLayout from '../Layouts/GuestLayout';
import LeftSide from '../Components/Auth/LeftSide';
import SocialImg from '../assets/social-people-image-1.jpg';
import RightSide from '../Components/Auth/RightSide';
import Input from '../Components/Auth/Input';
import axiosClient from '../Axios/axiosClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // First, get the CSRF cookie
//       await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });

//       const headers = {
//         'Content-Type': 'application/json',
//       };
//       const response = await axios.post('http://localhost:8000/api/login', { email, password }, { headers, withCredentials: true });
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const data = { email: email, password: password };
        const response = await axiosClient.post("/login", data);
        console.log(response.data);
      } catch (error) {
        console.error("Error posting data:", error);
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
        <form className='flex flex-col gap-[30px]' onSubmit={handleLogin}>
          <h1 className='text-[#555] font-bold text-[30px]'>Login</h1>
          <Input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-1/2 py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
            Log In
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

export default Login;
