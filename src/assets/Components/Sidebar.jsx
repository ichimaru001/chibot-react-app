import { FaPowerOff } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({
  logOutPopUpComp,
  setLogOutComp,
  avatarWarning,
  sidebarType,
}) => {
  const navigate = useNavigate()
  let sidebarClasses = `sidebar`
  let sidebarID = `sidebar-plain`
  if (sidebarType === 'chat') {
    sidebarClasses = `sidebar sidebar-hidden`
    sidebarID = `sidebar-chat`
  }

  return (
    <span id={sidebarID} className={sidebarClasses}>
      <div className='sidebar-icons-div'>
        <span
          className='sidebar-icon profile-icon'
          onClick={() => {
            if (sidebarType === 'chat') {
              navigate('/avatar')
            }
            if (sidebarType === 'avatar') {
              avatarWarning()
            }
          }}
        >
          <MdAccountCircle className='sidebar-icon-imported profile-icon-chat'></MdAccountCircle>
        </span>
        <span
          className='sidebar-icon sign-out-icon'
          onClick={() => {
            setLogOutComp(!logOutPopUpComp)
          }}
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
    </span>
  )
}
export default Sidebar
