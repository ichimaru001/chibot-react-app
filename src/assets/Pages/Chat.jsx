// TO-DO LIST
// 1.   -find a way to return a function from 'SpinHamburger' component
//      -update the useStates to enable sidebar functionality

// import react n friends
import { useState, useEffect } from 'react'

// import data/components
import msgData from '../../data'
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar'
import UserMessages from '../Components/Chat/UserMessages'
import ChatBoxDiv from '../Components/Chat/ChatBoxDiv'
import SpinHamburger from '../Components/Chat/SpinHamburger'

const Chat = () => {
  const [sidebarState, setSidebarState] = useState(false)
  const [logOutPopUp, setLogOutPopUp] = useState(false)

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

  useEffect(() => {
    const element1 = document.querySelector('.popup-div')
    const element2 = document.querySelector('.overlay-chat')
    if (logOutPopUp) {
      element1.classList.add('log-out-pop-up-appear')
      element2.classList.add('log-out-pop-up-overlay-appear')
    }
  })

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
        <SpinHamburger />
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
        <ChatBoxDiv />
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
