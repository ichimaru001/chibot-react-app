import { useNavigate } from 'react-router-dom'

const LogInBtnDiv = () => {
  const navigate = useNavigate()
  return (
    <div className='fields-div-signin div-signup-signin'>
      <button className='btn btn-login-signin btn-login-login'>Login</button>
      <span className='signin-info-login'>
        Have not signed up yet?{' '}
        <a className='signup-link-login' onClick={() => navigate('/signin')}>
          Sign up here.
        </a>
      </span>
    </div>
  )
}
export default LogInBtnDiv
