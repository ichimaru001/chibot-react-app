const SignOutOverlay = ({ logOutPopUpComp, setLogOutComp }) => {
  return (
    <>
      <div className='popup-div'>
        <div className='signout-popup-chat'>
          <span className='signout-popup-warning-chat'>
            Do you want to sign out?
          </span>
          <div className='signout-popup-btn-div-chat'>
            <button className='btn-popup-chat'>Sign out</button>
            <button
              className='btn-popup-chat btn-popup-cancel-chat'
              onClick={() => {
                setLogOutComp(!logOutPopUpComp)
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <span className='overlay-chat'></span>
    </>
  )
}
export default SignOutOverlay
