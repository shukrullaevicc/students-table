import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><NavLink to="/admin/students">Students</NavLink></li>
        <li><NavLink to="/admin/expelled-students">Expelled students</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar