import { useState, useEffect, useRef } from 'react'

const OverlayTest = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [ifValid, setIfValid] = useState(false)
  const timeoutOverlayRef = useRef(null)

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
    <main
      style={{
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
      }}
    >
      <div>
        <input
          type='checkbox'
          checked={ifValid}
          onChange={() => {
            console.log(`set if valid to ${!ifValid}`)
            setIfValid(!ifValid)
          }}
        />
        <>
          {showOverlay && (
            <span
              style={{
                backgroundColor: 'rgba(30, 24, 37, 0.8)',
                width: '20rem',
                height: '20rem',
                position: 'absolute',
              }}
              className={ifValid ? 'overlay-span' : 'overlay-span-hidden'}
            ></span>
          )}
        </>
      </div>
    </main>
  )
}
export default OverlayTest
