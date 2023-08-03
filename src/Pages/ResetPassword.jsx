import React, { useEffect, useState } from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-1.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'
import { useLocation } from 'react-router-dom';
import { postRequest } from '../Axios/axiosClient'


const ResetPassword = () => {

  const location = useLocation();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    const tokenParam = searchParams.get('token');
    setEmail(emailParam);
    setToken(tokenParam);
  }, [location.search]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      const response = await postRequest('/reset-password', {
        email: email, 
        token: token, 
        password: password, 
        password_confirmation: passwordConfirmation 
    });
      setMessage(response.data.message);
      setErrors({}); 
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
            description={'Register to our social platform and enjoy your life, here you can see many funny news'}
            span={'If you dont need reset your password ?'}
            buttonText={'Log In'}
            link="/"
        />
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]' onSubmit={handlePasswordReset}>
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
                <Input
                    placeholder="Enter Password confirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    error={errors.password_confirmation}
                />
                <button className="w-1/2 py-2 px-4 border-none bg-[#938ceb] text-white  cursor-pointer">
                    Reset Password
                </button>
                {message && <p className="text-green-600">{message}</p>}
            </form>
        </RightSide>
    </GuestLayout>
  )
}

export default ResetPassword
