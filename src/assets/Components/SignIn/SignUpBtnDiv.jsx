import { useNavigate } from 'react-router-dom'

const SignUpBtnDiv = () => {
  const navigate = useNavigate()
  return (
    <div className='fields-div-signin div-signup-signin'>
      <button className='btn btn-login-signin btn-signup-signin'>
        Sign up
      </button>
      <span className='login-link-signin' onClick={() => navigate('/login')}>
        Already have an account?
      </span>
    </div>
  )
}
export default SignUpBtnDiv
