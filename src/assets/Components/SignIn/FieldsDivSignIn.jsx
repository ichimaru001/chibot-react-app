const FieldsDivSignIn = () => {
  return (
    <>
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
    </>
  )
}
export default FieldsDivSignIn
