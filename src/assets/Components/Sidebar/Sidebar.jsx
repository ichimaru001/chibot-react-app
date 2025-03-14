import { FaPowerOff } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ChannelSidebar from './ChannelSidebar'

const Sidebar = ({
  setLogOutPopUp,
  avatarWarning,
  sidebarType,
  sidebarState,
}) => {
  const navigate = useNavigate()

  return (
    <span
      id={'sidebar-chat'}
      className={sidebarState ? 'sidebar' : 'sidebar sidebar-hidden'}
    >
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
            setLogOutPopUp()
          }}
        >
          <FaPowerOff className='sidebar-icon-imported sign-out-icon-chat'></FaPowerOff>
        </span>
      </div>
      <div className='sidebar-channels-div'>
        <span className='channels-header'>channels</span>
        <ChannelSidebar />
      </div>
    </span>
  )
}
export default Sidebar
