// FOCUS/GOAL
// 1.   ...

// NOTES
// use github to upload project
// avoid working a lot with user pfp functionality until working with backend

// import react n friends
import { useState, useEffect } from 'react'
// icons
import { PiCameraPlusBold } from 'react-icons/pi'
import { FaEdit } from 'react-icons/fa'
// data/components
import SignOutOverlay from '../Components/SignOutOverlay'
import Sidebar from '../Components/Sidebar'

const Avatar = () => {
  const [logOutPopUp, setLogOutPopUp] = useState(false)

  const [userName, setUserName] = useState('Chibot-test01')
  const [userEmail, setUserEmail] = useState('ichi-testing@test.com')
  const [userPW, setUserPW] = useState(`**************
`)

  const [clickSave, setClickSave] = useState(false)
  const [needSaving, setNeedSaving] = useState(false)
  const [confirmSaving, setConfirmSaving] = useState(false)

  const [isEditingPFP, setIsEditingPFP] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingPW, setIsEditingPW] = useState(false)

  const [avatarPopUp, setAvatarPopUp] = useState(false)
  const [msgAnimPlaying, setMsgAnimPlaying] = useState(false)
  const [textMsgPopUp, setTextMsgPopUp] = useState('')
  const [statusMsgPopUp, setStatusMsgPopUp] = useState('')

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
    setMsgAnimPlaying(true)
    setAvatarPopUp(true)
  }
  const avatarSpanHighlight = () => {
    const PFPSpan = document.getElementById('img-main-avatar-id')
    if (isEditingPFP) {
      PFPSpan.classList.add('img-main-avatar-activated')
    } else {
      PFPSpan.classList.remove('img-main-avatar-activated')
    }
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
    } else if (isEditingPFP) {
      setNeedSaving(true)
      // console.log('pfp - need saving set to true')
    } else if (
      !isEditingEmail ||
      !isEditingPW ||
      !isEditingName ||
      !isEditingPFP
    ) {
      setNeedSaving(false)
    }
  }
  const showSaveChanges = () => {
    const saveChangesElement = document.querySelector(
      '.save-changes-div-avatar'
    )

    if (isEditingEmail || isEditingPFP || isEditingName) {
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
      setStatusMsgPopUp('OK')
      colorMsgPopUp(msgPopUpElement)
      // console.log('click save - false')
      setClickSave(false)
      // console.log('set all edits false')
      setIsEditingName(false)
      setIsEditingEmail(false)
      setIsEditingPFP(false)
      if (isEditingPW) {
        setIsEditingPW(false)
        expandPWDiv()
      }
    } else {
      // console.log('error occurred!')
      setTextMsgPopUp('Error Occurred')
      setStatusMsgPopUp('ERROR')
      colorMsgPopUp(msgPopUpElement)

      // console.log('click save - false')
      setClickSave(false)
      // !! ^ to show msg again
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
    } else if (isEditingPFP) {
      setTextMsgPopUp('Successfully changed profile picture')
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
      confirmPWInput.value = ''
      setConfirmSaving(true)
      setUserPW(editPWInput.value)
      // console.log('confirm saving set to true')
    } else {
      setConfirmSaving(false)
      // console.log('confirm saving set to false')
    }
  }

  // initialising avatar
  useEffect(() => {
    // checks if user is attempting to log out
    checkLogOutPopUp()

    // darkens avatar pfp circle
    avatarSpanHighlight()

    checkNeedSaving()
    showSaveChanges()
    expandPWDiv()
  })
  // save changes func
  useEffect(() => {
    // checks if need saving to disable running the function when page is first rendered
    if (needSaving) {
      // check if saving confirmed and then show pop-up msg
      saveChangesFunc()
    }
  }, [confirmSaving, clickSave])
  // plays pop up animation
  useEffect(() => {
    if (msgAnimPlaying || avatarPopUp) {
      const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
      msgPopUpElement.classList.add('message-pop-up-animation')

      if (avatarPopUp) {
        const msgPopUpElement = document.querySelector('.message-pop-up-avatar')
        setTextMsgPopUp('Already in avatar')
        msgPopUpElement.classList.remove('msg-pop-up-green-avatar')
        msgPopUpElement.classList.add('msg-pop-up-red-avatar')
      }

      setTimeout(() => {
        msgPopUpElement.classList.remove('message-pop-up-animation')
        setMsgAnimPlaying(false)
        setAvatarPopUp(false)
        // console.log('set anim false')
      }, 3000)
    }
  }, [msgAnimPlaying])
  // focuses on input when editing
  useEffect(() => {
    // allows user to focus into the input after clicking edit button
    const emailInput = document.getElementById('subinfo-input-avatar-email')
    const pwInput = document.getElementById('subinfo-input-avatar-pw')
    const nameInput = document.getElementById('info-input-avatar-name')
    if (isEditingEmail) {
      emailInput.focus()
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
                    if (isEditingPW || isEditingEmail || isEditingPFP) {
                      setIsEditingPW(false)
                      setIsEditingEmail(false)
                      setIsEditingPFP(false)
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
                <span
                  id='img-main-avatar-id'
                  className='img-main-avatar'
                  onClick={() => {
                    setIsEditingPFP(!isEditingPFP)
                    if (isEditingPW || isEditingName || isEditingEmail) {
                      setIsEditingPW(false)
                      setIsEditingName(false)
                      setIsEditingEmail(false)
                    }
                  }}
                >
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
                      if (isEditingPW || isEditingName || isEditingPFP) {
                        setIsEditingPW(false)
                        setIsEditingName(false)
                        setIsEditingPFP(false)
                      }
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
                      if (isEditingEmail || isEditingName || isEditingPFP) {
                        setIsEditingEmail(false)
                        setIsEditingName(false)
                        setIsEditingPFP(false)
                      }
                    }}
                  />
                </div>
                <div className='save-changes-div-avatar save-changes-div-hidden-avatar'>
                  <button
                    className='btn-save-changes-avatar'
                    onClick={() => {
                      checkEditIfSave()
                      setClickSave(true)
                      setMsgAnimPlaying(true)
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
                      setIsEditingPFP(false)
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

// misc/throwaway code fromm here on
