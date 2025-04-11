// TO-DO LIST
// 1.   ...

// import react n friends
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../Context'

// import data/components
import msgData from '../../data'
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar/Sidebar'
import UserMessages from '../Components/Chat/UserMessages'
import ChatBoxDiv from '../Components/Chat/ChatBoxDiv'
import SpinHamburger from '../Components/Chat/SpinHamburger'
import DarkOverlay from '../Components/Overlay/DarkOverlay'
import MainMobileOverlay from '../Components/Overlay/MainMobileOverlay'

const Chat = () => {
  const { sidebarState, setSidebarState, logOutPopUp, setLogOutPopUp } =
    useGlobalContext()

  return (
    <>
      <SignOutOverlay
        ifValid={logOutPopUp}
        setLogOutPopUp={() => setLogOutPopUp(false)}
      />
      <MainMobileOverlay sidebarState={sidebarState} />
      <header>
        <div className='header-title'></div>
        <SpinHamburger
          setSideBarState={(status) => setSidebarState(status)}
          sidebarState={sidebarState}
        />
      </header>
      <main className='main-chat'>
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
        <ChatBoxDiv sidebarState={sidebarState} />
      </footer>
    </>
  )
}

export default Chat

// misc./throwaway code
