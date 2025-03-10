import { FaPowerOff } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import ChannelSidebar from './ChannelSidebar'

const Sidebar = ({
  setLogOutPopUp,
  avatarWarning,
  sidebarType,
  sidebarState,
}) => {
  return (
    <span
      id={sidebarType === 'chat' ? 'sidebar-chat' : 'sidebar-plain'}
      className={
        sidebarType === 'chat'
          ? sidebarState
            ? 'sidebar'
            : 'sidebar sidebar-hidden'
          : 'sidebar'
      }
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
