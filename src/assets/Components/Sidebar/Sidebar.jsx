import { FaPowerOff } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import ChannelSidebar from './ChannelSidebar'

const Sidebar = ({
  setLogOutPopUp,
  avatarWarning,
  sidebarType,
  sidebarState,
}) => {
  // let sidebarClasses = `sidebar`
  // let sidebarID = `sidebar-plain`
  // if (sidebarType === 'chat') {
  //   sidebarClasses = `sidebar sidebar-hidden`
  //   sidebarID = `sidebar-chat`
  // }

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
      // className={sidebarState ? 'sidebar' : 'sidebar sidebar-hidden'}
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
            // console.log('set log out')
          }}
        >
          <FaPowerOff className='sidebar-icon-imported sign-out-icon-chat'></FaPowerOff>
        </span>
      </div>
      <div className='sidebar-channels-div'>
        <span className='channels-header'>channels</span>
        <ChannelSidebar />
        {/* <div className='channels-names'>
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
        </div> */}
      </div>
    </span>
  )
}
export default Sidebar
