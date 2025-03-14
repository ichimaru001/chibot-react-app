import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

const SignOutOverlay = ({ ifValid, setLogOutPopUp }) => {
  const [showSignOut, setShowSignOut] = useState(false)
  const timeoutSignOutRef = useRef(null)

  useEffect(() => {
    if (ifValid) {
      if (timeoutSignOutRef) {
        clearTimeout(timeoutSignOutRef.current)
      }
      setShowSignOut(true)
    } else {
      timeoutSignOutRef.current = setTimeout(() => {
        setShowSignOut(false)
        timeoutSignOutRef.current = null
      }, 400)
    }
    return () => {
      if (timeoutSignOutRef) {
        clearTimeout(timeoutSignOutRef.current)
      }
    }
  }, [ifValid])

  return (
    <>
      <>
        {showSignOut && (
          <>
            <div
              className={
                ifValid
                  ? 'signout-overlay popup-div'
                  : 'signout-overlay-hidden popup-div'
              }
            >
              <div className='signout-popup-chat'>
                <span className='signout-popup-warning-chat'>
                  Do you want to sign out?
                </span>
                <div className='signout-popup-btn-div-chat'>
                  <button className='btn-popup-chat'>Sign out</button>
                  <button
                    className='btn-popup-chat btn-popup-cancel-chat'
                    onClick={() => {
                      setLogOutPopUp()
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <span
              style={{
                backgroundColor: 'rgba(30, 24, 37, 0.95)',
                width: '100vw',
                height: '100vh',
                zIndex: '4',
                position: 'fixed',
              }}
              className={ifValid ? 'signout-overlay' : 'signout-overlay-hidden'}
            ></span>
          </>
        )}
      </>
    </>
  )
}
export default SignOutOverlay
