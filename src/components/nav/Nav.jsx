import './Nav.css'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <ul className="nav__list">
          <img className='nav__logo' src={logo} alt="" />
          <li className='list__item'><NavLink to='/'>Home</NavLink></li>
          <li className='list__item'><NavLink to='/admin/students'>Admin</NavLink></li>
          <li className='list__item'><NavLink to='/auth/login'>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav