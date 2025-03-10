import { channelList } from './channel-list'
import { useNavigate } from 'react-router-dom'

const ChannelSidebar = () => {
  const navigate = useNavigate()

  return (
    <div className='channels-names'>
      {channelList.map(({ id, name, description }) => {
        return (
          <button
            key={id}
            className='btn btn-channels'
            onClick={() => navigate('/chat')}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
export default ChannelSidebar
