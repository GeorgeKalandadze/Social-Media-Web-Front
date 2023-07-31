import React, { useState } from 'react'
import GuestLayout from '../Layouts/GuestLayout'
import LeftSide from '../Components/Auth/LeftSide'
import SocialImg from '../assets/social-people-image-2.jpg'
import RightSide from '../Components/Auth/RightSide'
import Input from '../Components/Auth/Input'
import { postRequest } from '../Axios/axiosClient'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = {name:name, email: email, password: password, password_confirmation:passwordConfirmation };
            const response = await postRequest("/register", data);
            console.log(response)
            navigate('/verify-email')
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
    <GuestLayout className={"flex-row-reverse"}>
        <LeftSide 
            bgImage={SocialImg} 
            page={"Sign Up"}
            description={'Register to our social platform and enjoy your life, here you can see many funny news'}
            span={'Are you already registered?'}
            buttonText={'Log in'}
            link="/"
        />
        <RightSide className={"justify-center"}>
            <form className='flex flex-col gap-[30px]' onSubmit={handleRegister}>
                <h1 className='text-[#555] font-bold text-[30px]'>Sign Up</h1>
                <Input
                    placeholder="Enter Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                />
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