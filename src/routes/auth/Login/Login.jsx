import './Login.css'

const Login = () => {
  return (
    <form className='login' action="">
      <input type="text" placeholder='Username'/>
      <input type="password" placeholder='Password'/>
      <button>Login</button>
    </form>
  )
}

export default Login