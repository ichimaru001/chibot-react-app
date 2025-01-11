import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate()
  return (
    <main className='main-signin'>
      <section className='section-signin'>
        <div className='upper-div-signin'>
          <p className='upper-header-signin'>Join in the conversation!</p>
        </div>
        <div className='main-div-signin'>
          <div className='fields-div-signin'>
            <span className='header-signin'>Username</span>
            <input type='text' spellCheck='false' className='input-signin' />
          </div>
          <div className='fields-div-signin'>
            <span className='header-signin'>Email</span>
            <input type='text' spellCheck='false' className='input-signin' />
          </div>
          <div className='fields-div-signin'>
            <span className='header-signin'>Password</span>
            <input type='text' spellCheck='false' className='input-signin' />
          </div>
          <div className='fields-div-signin div-signup-signin'>
            <button className='btn btn-login-signin btn-signup-signin'>
              Sign up
            </button>
            <span
              className='login-link-signin'
              onClick={() => navigate('/login')}
            >
              Already have an account?
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}
export default SignIn
