const FieldsDivLogIn = () => {
  return (
    <>
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
    </>
  )
}
export default FieldsDivLogIn
