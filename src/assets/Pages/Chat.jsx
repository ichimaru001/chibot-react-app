// TO-DO LIST
// 1.   ...

// import react n friends
import { useState, useEffect } from 'react'

// import data/components
import msgData from '../../data'
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar/Sidebar'
import UserMessages from '../Components/Chat/UserMessages'
import ChatBoxDiv from '../Components/Chat/ChatBoxDiv'
import SpinHamburger from '../Components/Chat/SpinHamburger'
import DarkOverlay from '../Components/Overlay/DarkOverlay'

const Chat = () => {
  const [sidebarState, setSidebarState] = useState(false)
  const [ifUserOnMobile, setIfUserOnMobile] = useState(false)
  const [windowWidth, changeWindowWidth] = useState(window.innerWidth)
  const [logOutPopUp, setLogOutPopUp] = useState(false)

  // if window width < 900, detects user on mobile
  const changeUserMobileState = () => {
    changeWindowWidth(window.innerWidth)
    if (windowWidth < 900) {
      setIfUserOnMobile(true)
    } else {
      setIfUserOnMobile(false)
    }
  }
  // detect if user on mobile on mount
  useEffect(() => {
    changeUserMobileState()
  }, [])
  // detects every time user resizes window
  useEffect(() => {
    window.addEventListener('resize', changeUserMobileState)
    return () => {
      window.removeEventListener('resize', changeUserMobileState)
    }
  }, [windowWidth])

  return (
    <>
      {logOutPopUp && (
        <SignOutOverlay
          logOutPopUp={logOutPopUp}
          setLogOutPopUp={() => setLogOutPopUp(!logOutPopUp)}
        />
      )}
      <>
        {(ifUserOnMobile || logOutPopUp) && (
          <DarkOverlay ifValid={sidebarState || logOutPopUp} />
        )}
      </>
      <header>
        <div className='header-title'></div>
        <SpinHamburger
          setSideBarState={(status) => setSidebarState(status)}
          sidebarState={sidebarState}
        />
      </header>
      <main
        className={
          ifUserOnMobile && sidebarState
            ? 'main-chat-mobile-sidebar'
            : 'main-chat'
        }
      >
        <section className='msgs-section'>
          {msgData.map((msg) => {
            return <UserMessages {...msg} key={msg.id} />
          })}
        </section>
        <Sidebar
          setLogOutPopUp={() => setLogOutPopUp(!logOutPopUp)}
          sidebarType={'chat'}
          sidebarState={sidebarState}
        ></Sidebar>
      </main>
      <footer>
        <ChatBoxDiv
          sidebarState={sidebarState}
          ifUserOnMobile={ifUserOnMobile}
        />
      </footer>
    </>
  )
}

export default Chat

// misc./throwaway code
