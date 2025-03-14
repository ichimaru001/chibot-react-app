const SignOutOverlay = ({ logOutPopUp, setLogOutPopUp }) => {
  return (
    <>
      <div
        className={
          logOutPopUp ? 'popup-div log-out-pop-up-appear' : 'popup-div'
        }
      >
        {/* <div className='popup-div'> */}
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
      {/* <span
        className={
          logOutPopUp
            ? 'log-out-pop-up-overlay-appear overlay-chat'
            : 'overlay-chat'
        }
      ></span> */}
      {/* <span className='overlay-chat'></span> */}
    </>
  )
}
export default SignOutOverlay
