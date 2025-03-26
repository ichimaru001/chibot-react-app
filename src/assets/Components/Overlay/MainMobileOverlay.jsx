import { useState, useEffect } from 'react'

import DarkOverlay from './DarkOverlay'

const MainMobileOverlay = ({ sidebarState }) => {
  const [ifUserOnMobile, setIfUserOnMobile] = useState(false)
  const [windowWidth, changeWindowWidth] = useState(window.innerWidth)

  // if window width < 1100, detects user on mobile
  const changeUserMobileState = () => {
    changeWindowWidth(window.innerWidth)
    if (windowWidth < 1100) {
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

  return <>{ifUserOnMobile && <DarkOverlay ifValid={sidebarState} />}</>
}
export default MainMobileOverlay
