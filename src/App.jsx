import './App.css'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import ResetPassword from './Pages/ResetPassword'
import ForgotPassword from './Pages/ForgotPassword'
import VerifyEmail from './Pages/VerifyEmail'
import Home from './Pages/Home'
import LoginWithGoogle from './Pages/LoginWithGoogle'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axiosClient from './Axios/axiosClient'
import { fetchUser } from './Redux/userDataSlice'


function App() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/auth/google/callback' element={<LoginWithGoogle/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/verify-email' element={<VerifyEmail/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
