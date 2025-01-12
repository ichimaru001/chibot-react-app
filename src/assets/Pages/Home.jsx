import { useNavigate } from 'react-router-dom'

import HomeButtons from '../Components/Home/HomeButtons'
import HeroMain from '../Components/Home/HeroMain'
import HomeLowerDiv from '../Components/Home/HomeLowerDiv'

const Home = () => {
  const navigate = useNavigate()
  return (
    <main className='main-home'>
      <section className='section-home'>
        <div className='empty-div'></div>
        <div className='hero-div'>
          <HeroMain />
          <div className='hero-button-div'>
            <HomeButtons type='login' />
            <HomeButtons type='signin' />
          </div>
        </div>
        <HomeLowerDiv />
      </section>
    </main>
  )
}
export default Home
