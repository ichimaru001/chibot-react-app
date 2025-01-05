// FOCUS/GOAL
// 1. find a way to call the timeout outside scope
//    becuz clickSave being updated twice therefore
//    messes with the entire pop-up code!!!!
//    i.e, line 145 and line 159
// 2. yes!!! now implement avatar change possibly

// NOTES
// use github to upload project

// import react n friends
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// icons
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { PiCameraPlusBold } from 'react-icons/pi'
import { FaEdit } from 'react-icons/fa'

// data/components
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar'

const Avatar = () => {
  const navigate = useNavigate()

  const [logOutPopUp, setLogOutPopUp] = useState(false)

  const [userName, setUserName] = useState('Chibot-test01')
  const [userEmail, setUserEmail] = useState('ichi-testing@test.com')
  const [userPW, setUserPW] = useState(`**************
`)

  const [clickSave, setClickSave] = useState(false)
  const [needSaving, setNeedSaving] = useState(false)
  const [confirmSaving, setConfirmSaving] = useState(false)

  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingPW, setIsEditingPW] = useState(false)

  const [msgAnimPlaying, setMsgAnimPlaying] = useState(false)
  const [ifShowMsgPopUp, setIfShowMsgPopUp] = useState(false)
  // !! ^ line may be redundant
  const [isMsgPopUp, setIsMsgPopUp] = useState(false)
  const [textMsgPopUp, setTextMsgPopUp] = useState('')
  const [statusMsgPopUp, setStatusMsgPopUp] = useState('')

  // const showMsgPopUp = () => {
  //   const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
  //   if (!isMsgPopUp) {
  //     setIsMsgPopUp(true)
  //     // colorMsgPopUp(msgPopUpElement)
  //     msgPopUpElement.classList.add('message-pop-up-animation')
  //     setTimeout(() => {
  //       msgPopUpElement.classList.remove('message-pop-up-animation')
  //       msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
  //       msgPopUpElement.classList.remove('msg-pop-up-red-avatar')
  //       console.log('removed classes')
  //       // colorMsgPopUp(msgPopUpElement)
  //       setIsMsgPopUp(false)
  //     }, 3000)
  //   }
  // }
  const colorMsgPopUp = (msgPopUpElement) => {
    if (statusMsgPopUp === 'OK') {
      msgPopUpElement.classList.remove('msg-pop-up-red-avatar')
      msgPopUpElement.classList.add('msg-pop-up-green-avatar')
      // console.log('added green')
    }
    if (statusMsgPopUp === 'ERROR') {
      msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
      msgPopUpElement.classList.add('msg-pop-up-red-avatar')
      // console.log('added red')
    }
  }

  const checkLogOutPopUp = () => {
    const element1 = document.querySelector('.popup-div')
    const element2 = document.querySelector('.overlay-chat')
    if (logOutPopUp) {
      element1.classList.add('log-out-pop-up-appear')
      element2.classList.add('log-out-pop-up-appear')
    }
  }

  const alreadyInAvatarWarning = () => {
    setTextMsgPopUp('Already in avatar')
    setStatusMsgPopUp('ERROR')
    // showMsgPopUp()
  }

  const expandPWDiv = () => {
    const expandElement = document.querySelector(
      '.subinfo-pw-expand-div-avatar'
    )
    if (isEditingPW) {
      expandElement.classList.remove('subinfo-pw-expand-div-hidden')
    } else {
      expandElement.classList.add('subinfo-pw-expand-div-hidden')
    }
  }

  const checkNeedSaving = () => {
    if (isEditingEmail) {
      setNeedSaving(true)
      // console.log('email - need saving set to true')
    } else if (isEditingPW) {
      setNeedSaving(true)
      // console.log('password - need saving set to true')
    } else if (isEditingName) {
      setNeedSaving(true)
      // console.log('name - need saving set to true')
    } else if (!isEditingEmail || !isEditingPW || !isEditingName) {
      setNeedSaving(false)
    }
  }
  const showSaveChanges = () => {
    const saveChangesElement = document.querySelector(
      '.save-changes-div-avatar'
    )

    if (isEditingEmail || (isEditingName && !isEditingPW)) {
      saveChangesElement.classList.add('save-changes-editing-email')
    } else {
      saveChangesElement.classList.remove('save-changes-editing-email')
    }

    if (needSaving) {
      saveChangesElement.classList.remove('save-changes-div-hidden-avatar')
      // console.log('showing save changes div')
    } else {
      saveChangesElement.classList.add('save-changes-div-hidden-avatar')
      // console.log('hiding save changes div')
    }
  }

  const saveChangesFunc = () => {
    const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
    if (confirmSaving) {
      // setTextMsgPopUp('Successfully changed password')
      setStatusMsgPopUp('OK')
      // console.log('successfully set status')
      colorMsgPopUp(msgPopUpElement)
      // showMsgPopUp()
      console.log('set all edits false')

      console.log('click save - false')

      setClickSave(false)

      setIsEditingName(false)
      setIsEditingEmail(false)
      if (isEditingPW) {
        setIsEditingPW(false)
        expandPWDiv()
      }
    } else {
      setTextMsgPopUp('Error Occurred')
      setStatusMsgPopUp('ERROR')
      colorMsgPopUp(msgPopUpElement)

      console.log('click save - false')
      setClickSave(false)
      // !! ^ to show msg again

      console.log('error occurred!')
      // showMsgPopUp()
    }
  }

  const checkEditIfSave = () => {
    if (isEditingEmail) {
      const editEmailInput = document.getElementById(
        'subinfo-input-avatar-email'
      )
      // console.log(editEmailInput.value)
      setUserEmail(editEmailInput.value)
      setTextMsgPopUp('Successfully changed email')
      setConfirmSaving(true)
      // console.log('successfully changed email')
    } else if (isEditingPW) {
      userPWCheck()
    } else if (isEditingName) {
      const editNameInput = document.getElementById('info-input-avatar-name')
      setTextMsgPopUp('Successfully changed name')
      setUserName(editNameInput.value)
      // console.log('changed name?')
      setConfirmSaving(true)
    }
  }

  const userPWCheck = () => {
    const editPWInput = document.getElementById('subinfo-input-avatar-pw')
    const confirmPWInput = document.getElementById(
      'subinfo-input-avatar-confirm-pw'
    )
    if (editPWInput.value === confirmPWInput.value) {
      setTextMsgPopUp('Successfully changed password')
      setConfirmSaving(true)
      setUserPW(editPWInput.value)
      // console.log('confirm saving set to true')
    } else {
      setConfirmSaving(false)
      // console.log('confirm saving set to false')
    }
  }

  useEffect(() => {
    // checks if user is attempting to log out
    checkLogOutPopUp()

    checkNeedSaving()
    showSaveChanges()
    expandPWDiv()
  })

  useEffect(() => {
    // checks if need saving to disable running the function when page is first rendered

    // console.log('useEffect confirmSaving')
    if (needSaving) {
      // console.log('confirm saving array updated')
      // check if saving confirmed and then show pop-up msg
      saveChangesFunc()
    }
  }, [confirmSaving, clickSave])

  // useEffect(() => {
  //   const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
  //   setIsMsgPopUp(true)
  //   msgPopUpElement.classList.add('message-pop-up-animation')
  //   const msgPopUp = setTimeout(() => {
  //     msgPopUpElement.classList.remove('message-pop-up-animation')
  //     // msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
  //     // msgPopUpElement.classList.remove('msg-pop-up-red-avatar')
  //     setIfShowMsgPopUp(false)
  //     // console.log('removed classes')
  //     // colorMsgPopUp(msgPopUpElement)
  //     setIsMsgPopUp(false)
  //   }, 3000)
  //   return () => {
  //     // console.log('clean up function')

  //     // if (ifShowMsgPopUp) {
  //     clearTimeout(msgPopUp)
  //     setIfShowMsgPopUp(false)
  //     // }

  //     msgPopUpElement.classList.remove('message-pop-up-animation')
  //     colorMsgPopUp(document.querySelector('.message-pop-up-avatar'))
  //   }
  // }, [])

  // ^ clickSave
  // ^ initially ... , [ifShowMsgPopUp])

  // function playMsgPopUpA() {
  //   const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
  //   setIsMsgPopUp(true)
  //   msgPopUpElement.classList.add('message-pop-up-animation')
  //   if (msgAnimPlaying) {
  //     clearTimeout(msgPopUp)
  //   }
  //   const msgPopUp = setTimeout(() => {
  //     msgPopUpElement.classList.remove('message-pop-up-animation')
  //     // msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
  //     // msgPopUpElement.classList.remove('msg-pop-up-red-avatar')

  //     // setIfShowMsgPopUp(false)

  //     // console.log('removed classes')
  //     // colorMsgPopUp(msgPopUpElement)

  //     // setIsMsgPopUp(false)
  //     setMsgAnimPlaying(false)
  //   }, 3000)
  // }

  useEffect(() => {
    if (msgAnimPlaying) {
      const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
      setIsMsgPopUp(true)
      msgPopUpElement.classList.add('message-pop-up-animation')

      const msgPopUp = setTimeout(() => {
        msgPopUpElement.classList.remove('message-pop-up-animation')
        // msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
        // msgPopUpElement.classList.remove('msg-pop-up-red-avatar')

        // setIfShowMsgPopUp(false)

        // console.log('removed classes')
        // colorMsgPopUp(msgPopUpElement)

        // setIsMsgPopUp(false)
        setMsgAnimPlaying(false)
        console.log('set anim false')
      }, 3000)
      // return () => {
      //   clearTimeout(msgPopUp)
      //   console.log('clean up func')
      // }
    }
  }, [msgAnimPlaying])

  // useEffect(() => {
  //   return () => {
  //     console.log('timeout')
  //   }
  // }, [showIfMsgPopUp])

  // useEffect(() => {
  //   // checks the color of status pop up msg
  //   // initiially checks 'isMsgPopUp'
  //   if (isMsgPopUp) {
  //     colorMsgPopUp(document.querySelector('.message-pop-up-avatar'))
  //     // console.log('message pop up avatar')
  //   }
  // }, [isMsgPopUp])

  useEffect(() => {
    // allows user to focus into the input after clicking edit button
    const emailInput = document.getElementById('subinfo-input-avatar-email')
    const pwInput = document.getElementById('subinfo-input-avatar-pw')
    const nameInput = document.getElementById('info-input-avatar-name')
    if (isEditingEmail) {
      emailInput.focus()
      // console.log('editing email')
    } else if (isEditingPW) {
      pwInput.focus()
    } else if (isEditingName) {
      nameInput.focus()
    }
  }, [isEditingEmail, isEditingPW, isEditingName])

  return (
    <>
      {logOutPopUp && (
        <SignOutOverlay
          logOutPopUpComp={logOutPopUp}
          setLogOutComp={(LogOutStatus) => setLogOutPopUp(LogOutStatus)}
        />
      )}
      <>
        <div className='popup-div-avatar'>
          <div className='popup-grid-div-avatar'>
            <span className='message-pop-up-avatar'>{textMsgPopUp}</span>
          </div>
        </div>
      </>
      <main className='main-avatar'>
        <section className='middle-section-avatar'>
          <div className='main-div-avatar'>
            <div className='username-main-div-avatar'>
              {isEditingName ? (
                <input
                  id='info-input-avatar-name'
                  type='text'
                  spellCheck='false'
                  className='username-input-main-avatar'
                />
              ) : (
                <span
                  className='username-main-avatar'
                  onClick={() => {
                    setIsEditingName(!isEditingName)
                    if (isEditingPW || isEditingEmail) {
                      setIsEditingPW(false)
                      setIsEditingEmail(false)
                    }
                  }}
                >
                  {userName}
                </span>
              )}
              <span className='username-main-underline-avatar'></span>
            </div>
            <div className='info-main-div-avatar'>
              <div className='img-main-div-avatar'>
                <span className='img-main-avatar'>
                  <PiCameraPlusBold className='img-main-icon-avatar' />
                </span>
              </div>
              <div className='subinfo-important-div-avatar'>
                <div className='subinfo-main-div-avatar'>
                  <div className='subinfo-div-avatar'>
                    <label
                      className='subinfo-span-avatar'
                      htmlFor='subinfo-input-avatar-email'
                    >
                      Email
                    </label>
                    {isEditingEmail ? (
                      <input
                        id='subinfo-input-avatar-email'
                        className='subinfo-input-avatar'
                        type='text'
                      />
                    ) : (
                      <span className='subinfo-input-avatar'>{userEmail}</span>
                    )}
                  </div>
                  <FaEdit
                    className='subinfo-icon-avatar'
                    onClick={() => {
                      setIsEditingEmail(!isEditingEmail)
                      if (isEditingPW || isEditingName) {
                        setIsEditingPW(false)
                        setIsEditingName(false)
                      }
                      // checkNeedSaving()
                    }}
                  />
                </div>
                <div className='subinfo-main-div-avatar'>
                  <div className='subinfo-div-avatar subinfo-pw-main-div-avatar'>
                    <div className='subinfo-pw-div-avatar subinfo-div-avatar'>
                      <label
                        htmlFor='subinfo-input-avatar-pw'
                        className='subinfo-span-avatar'
                      >
                        Password
                      </label>
                      {isEditingPW ? (
                        <input
                          id='subinfo-input-avatar-pw'
                          className='subinfo-input-avatar'
                          type='text'
                        />
                      ) : (
                        <span className='subinfo-input-avatar'>{userPW}</span>
                      )}
                    </div>
                    <div className='subinfo-pw-expand-div-avatar subinfo-pw-expand-div-hidden'>
                      <div className='subinfo-confirm-pw-div-avatar subinfo-div-avatar'>
                        <label
                          htmlFor='subinfo-input-avatar-confirm-pw'
                          className='subinfo-span-avatar'
                        >
                          Confirm Password
                        </label>
                        {/* <span className='subinfo-input-avatar'>
                          **************
                        </span> */}
                        <input
                          id='subinfo-input-avatar-confirm-pw'
                          className='subinfo-input-avatar'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                  <FaEdit
                    className='subinfo-icon-avatar'
                    onClick={() => {
                      setIsEditingPW(!isEditingPW)
                      if (isEditingEmail || isEditingName) {
                        setIsEditingEmail(false)
                        setIsEditingName(false)
                      }
                    }}
                  />
                </div>
                <div className='save-changes-div-avatar save-changes-div-hidden-avatar'>
                  <button
                    className='btn-save-changes-avatar'
                    onClick={() => {
                      checkEditIfSave()

                      console.log('click save - true')
                      setClickSave(true)

                      setIfShowMsgPopUp(true)
                      setMsgAnimPlaying(true)

                      // playMsgPopUpA()
                    }}
                  >
                    Save changes
                  </button>
                  <button
                    className='btn-cancel-avatar'
                    onClick={() => {
                      setIsEditingPW(false)
                      setIsEditingName(false)
                      setIsEditingEmail(false)
                      if (isEditingPW) {
                        expandPWDiv()
                      }
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Sidebar
          logOutPopUpComp={logOutPopUp}
          setLogOutComp={(LogOutStatus) => setLogOutPopUp(LogOutStatus)}
          sidebarType={'avatar'}
          avatarWarning={alreadyInAvatarWarning}
        ></Sidebar>
      </main>
    </>
  )
}
export default Avatar

// misc/throwaway code

// onClick={() => {
//   const element = document.querySelector(
//     '.subinfo-div-avatar'
//   )
//   element.innerHTML = `<span className='subinfo-span-avatar'>Email</span>
//   <input className='subinfo-input-avatar' type='text' />
//   `
// }}

{
  /* <span className='sidebar'>
          <div className='sidebar-icons-div'>
            <span
              className='sidebar-icon profile-icon'
              onClick={() => {
                setTextMsgPopUp('Already in avatar')
                setStatusMsgPopUp('ERROR')
                showMsgPopUp()
              }}
            >
              <MdAccountCircle className='sidebar-icon-imported profile-icon-chat'></MdAccountCircle>
            </span>
            <span
              className='sidebar-icon sign-out-icon'
              onClick={() => setLogOutPopUp(!logOutPopUp)}
            >
              <FaPowerOff className='sidebar-icon-imported sign-out-icon-chat'></FaPowerOff>
            </span>
          </div>
          <div className='sidebar-channels-div'>
            <span className='channels-header'>channels</span>
            <div className='channels-names'>
              <button
                className='btn btn-channels'
                onClick={() => navigate('/chat')}
              >
                casual
              </button>
              <button
                className='btn btn-channels'
                onClick={() => navigate('/chat')}
              >
                formal
              </button>
              <button
                className='btn btn-channels'
                onClick={() => navigate('/chat')}
              >
                caveman
              </button>
            </div>
          </div>
        </span> */
}
