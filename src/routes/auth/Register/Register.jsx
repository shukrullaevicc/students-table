import './Register.css'

const Register = () => {
  return (
    <form className='register'>
      <input type="text" placeholder='Username'/>
      <input type="password" placeholder='Password'/>
      <input type="password" placeholder='Confirm Password'/>
      <button>Register</button>
    </form>
  )
}

export default Register