import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <main className='main-home'>
      <section className='section-home'>
        <div className='empty-div'></div>
        <div className='hero-div'>
          <div className='hero-main'>
            <div>
              <h1 className='home-header'>A bot that talks like me.</h1>
              <p className='home-additional-info'>
                3 alter egos to choose from
              </p>
            </div>
            <div className='hero-img'></div>
          </div>
          <div className='hero-button-div'>
            <button
              className='btn btn-home btn-sign-up-home'
              onClick={() => navigate('/signin')}
            >
              Sign Up
            </button>
            <button
              className='btn btn-home btn-login-home'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
        <div className='home-lower-div'>
          <span className='home-chibot'>chiBot</span>
        </div>
      </section>
    </main>
  )
}
export default Home
