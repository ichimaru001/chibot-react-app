import FieldsDivSignIn from '../Components/SignIn/FieldsDivSignIn'
import SignUpBtnDiv from '../Components/SignIn/SignUpBtnDiv'

const SignIn = () => {
  return (
    <main className='main-signin'>
      <section className='section-signin'>
        <div className='upper-div-signin'>
          <p className='upper-header-signin'>Join in the conversation!</p>
        </div>
        <div className='main-div-signin'>
          <FieldsDivSignIn />
          <SignUpBtnDiv />
        </div>
        <div></div>
      </section>
    </main>
  )
}
export default SignIn
