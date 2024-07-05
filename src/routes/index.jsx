import Home from './home/Home';
import Admin from './admin/Admin';
import Auth from './auth/Auth';
import Login from './auth/Login/Login';
import Register from './auth/Register/Register';
import NotFound from './not-found/NotFound';
import Students from './admin/students/Students';
import ExpelledStudents from './admin/expelled-students/ExpelledStudents';
import { Routes, Route, Navigate } from 'react-router-dom';

const RouteController = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='admin' element={<Admin />}>
          <Route path='students' element={<Students />} />
          <Route path='expelled-students' element={<ExpelledStudents />} />
        </Route>
        <Route path='auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='not-found'/>} />
      </Routes>
    </>
  )
}

export default RouteController