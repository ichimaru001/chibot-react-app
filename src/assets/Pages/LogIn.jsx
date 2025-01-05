const LogIn = () => {
  return (
    <main className='main-signin'>
      <section className='section-login'>
        <div className='upper-div-signin'>
          <p className='upper-header-signin'>Welcome back.</p>
        </div>
        <div className='main-div-login'>
          <div className='fields-div-signin'>
            <span className='header-signin'>Email</span>
            <input type='text' spellCheck='false' className='input-signin' />
          </div>
          <div className='fields-div-signin'>
            <span className='header-signin'>Password</span>
            <input type='text' spellCheck='false' className='input-signin' />
            <span className='forget-password-link-login'>
              Forgot your password?
            </span>
          </div>
          <div className='fields-div-signin div-signup-signin'>
            <button className='btn btn-login-signin btn-login-login'>
              Login
            </button>
            <span className='signin-info-login'>
              Have not signed up yet?{' '}
              <a href='' className='signup-link-login'>
                Sign up here.
              </a>
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}
export default LogIn
