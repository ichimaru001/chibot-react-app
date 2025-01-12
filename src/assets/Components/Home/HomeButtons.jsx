import { useNavigate } from 'react-router-dom'

const HomeButtons = ({ type }) => {
  const navigate = useNavigate()
  let btnClass = ''
  let URL = ''
  let btnText = ''
  if (type === 'login') {
    btnClass = 'btn btn-home btn-login-home'
    URL = '/login'
    btnText = 'Login'
  } else if (type === 'signin') {
    btnClass = 'btn btn-home btn-sign-up-home'
    URL = '/signin'
    btnText = 'Sign Up'
  }
  return (
    <button className={btnClass} onClick={() => navigate(`${URL}`)}>
      {btnText}
    </button>
  )
}
export default HomeButtons
