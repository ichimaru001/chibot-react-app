const UserMessages = ({ id, user, time, text }) => {
  return (
    <div className='msg' key={id}>
      <div className='msg-pfp-div'>
        <span className='msg-user-pfp'></span>
      </div>
      <div className='msg-div'>
        <div className='msg-header'>
          <span className='msg-user'>{user}</span>
          <span className='msg-time'>{time}</span>
        </div>
        <span className='msg-text'>{text}</span>
      </div>
    </div>
  )
}
export default UserMessages
