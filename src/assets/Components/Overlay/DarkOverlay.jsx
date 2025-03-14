import { useState, useEffect, useRef } from 'react'

const DarkOverlay = ({ ifValid }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  // const [ifValid, setIfValid] = useState(false)
  const timeoutOverlayRef = useRef(null)

  // const settingIfValid = () => {
  //   console.log(`ifValid : ${!ifValid}`)
  //   setIfValid(!ifValid)
  // }
  // useEffect(() => {
  //   window.addEventListener('click', settingIfValid)
  //   return () => {
  //     window.removeEventListener('click', settingIfValid)
  //   }
  // })

  useEffect(() => {
    if (ifValid) {
      if (timeoutOverlayRef.current) {
        clearTimeout(timeoutOverlayRef.current)
      }
      setShowOverlay(true)
    } else {
      timeoutOverlayRef.current = setTimeout(() => {
        setShowOverlay(false)
        timeoutOverlayRef.current = null
      }, 600)
    }
    return () => {
      if (timeoutOverlayRef.current) {
        clearTimeout(timeoutOverlayRef.current)
      }
    }
  }, [ifValid])

  return (
    <>
      {showOverlay && (
        <span
          style={{
            backgroundColor: 'rgba(30, 24, 37, 0.8)',
            width: '100vw',
            height: '100vh',
            zIndex: '1',
            position: 'fixed',
          }}
          className={ifValid ? 'overlay-span' : 'overlay-span-hidden'}
        ></span>
      )}
    </>
  )
}
export default DarkOverlay
