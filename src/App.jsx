import './App.css'
import Nav from './components/nav/Nav'
import RouteController from './routes/index'
import { useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()
  return (
    <>
      {
        pathname.includes('/home') && <Nav/>
      }
      <RouteController/>
    </>
  )
}

export default App
