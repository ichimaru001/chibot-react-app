// import react n friends
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import data/components
import msgData from '../../data'
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar'
import UserMessages from '../Components/Chat/UserMessages'

const Chat = () => {
  const [sidebarState, setSidebarState] = useState(false)
  const [logOutPopUp, setLogOutPopUp] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const element1 = document.querySelector('.popup-div')
    const element2 = document.querySelector('.overlay-chat')
    if (logOutPopUp) {
      element1.classList.add('log-out-pop-up-appear')
      element2.classList.add('log-out-pop-up-overlay-appear')
    }
  })

  const showHideSidebar = () => {
    const sidebar = document.getElementById('sidebar-chat')
    if (sidebarState === false) {
      sidebar.classList.remove('sidebar-hidden')
      return
    }
    if (sidebarState === true) {
      sidebar.classList.add('sidebar-hidden')
      return
    }
  }

  return (
    <>
      {logOutPopUp && (
        <SignOutOverlay
          logOutPopUpComp={logOutPopUp}
          setLogOutComp={(LogOutStatus) => setLogOutPopUp(LogOutStatus)}
        />
      )}

      <header>
        <div className='header-title'></div>
        <label className='spin-hamburger' htmlFor='spin-hamburger-input'>
          <span className='spin-hamburger-circle'></span>
          <input
            type='checkbox'
            id='spin-hamburger-input'
            className='spin-hamburger-input-chat'
            onClick={() => {
              setSidebarState(!sidebarState)
              showHideSidebar()
            }}
          />
          <span className='spin-hamburger-arm'></span>
        </label>
      </header>
      <main>
        <section className='msgs-section'>
          {msgData.map((msg) => {
            return <UserMessages {...msg} key={msg.id} />
          })}
        </section>
        <Sidebar
          logOutPopUpComp={logOutPopUp}
          setLogOutComp={(logOutStatus) => setLogOutPopUp(logOutStatus)}
          sidebarType={'chat'}
        ></Sidebar>
      </main>
      <footer>
        <div className='chat-box'>
          <span className='chat-align'>
            <input className='chat' type='text' id='chatbox-chat' />
            <div className='label-chat' htmlFor='chatbox-chat'>
              Chat here
            </div>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Chat

// misc./throwaway code

// useEffect(() => {
//   const element1 = document.querySelector('.signout-popup-div-chat')
//   const element2 = document.querySelector('.overlay-chat')
//   if (logOutPopUp) {
//     element1.classList.remove('log-out-pop-up-appear')
//     element2.classList.remove('log-out-pop-up-appear')
//     console.log('hi')
//   }
// }, [logOutPopUp])

// <div className='msg' key={id}>
//   <div className='msg-pfp-div'>
//     <span className='msg-user-pfp'></span>
//   </div>
//   <div className='msg-div'>
//     <div className='msg-header'>
//       <span className='msg-user'>{user}</span>
//       <span className='msg-time'>{time}</span>
//     </div>
//     <span className='msg-text'>{text}</span>
//   </div>
// </div>
