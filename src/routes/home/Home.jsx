import Nav from '../../components/nav/Nav'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <div className="home__contant">
        <h1 className='home__title'>BotirSmart</h1>
        <h2 className='home__subtitle'>School Dismissal Simplified</h2>
        <p className='home__text'>BotirSmart is a highly customizable school dismissal application for schools, camps, and afterschool programs to manage carline and bus student release.  Create a safer, more efficient dismissal process with state-of-the-art technology that manages communications and all of the logistics.</p>
        <button className='home__btn'><NavLink to='/auth/login'>Login</NavLink></button>
      </div>
    </div>
  )
}

export default Home