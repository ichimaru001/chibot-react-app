import FieldsDivLogIn from '../Components/LogIn/FieldsDivLogIn'
import LogInBtnDiv from '../Components/LogIn/LogInBtnDiv'

const LogIn = () => {
  return (
    <main className='main-signin'>
      <section className='section-login'>
        <div className='upper-div-signin'>
          <p className='upper-header-signin'>Welcome back.</p>
        </div>
        <div className='main-div-login'>
          <FieldsDivLogIn />
          <LogInBtnDiv />
        </div>
        <div></div>
      </section>
    </main>
  )
}
export default LogIn
