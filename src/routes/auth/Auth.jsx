import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Auth.css'
import BgImg from '../../images/loginBg.jpg'

const Auth = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/auth/login")
  },[])
  return (
    <div className='auth'>
      <div className='form'>
        <ul className='list__item'>
          <li className='item__list'><NavLink to="/auth/login">Login</NavLink></li>
          <li className='item__list'><NavLink to="/auth/register">Register</NavLink></li>
        </ul>
        <Outlet/>
      </div>
      <img className='auth__img' src={BgImg} alt="" />
    </div>
  )
}

export default Auth