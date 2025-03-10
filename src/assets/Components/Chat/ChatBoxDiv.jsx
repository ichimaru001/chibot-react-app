const ChatBoxDiv = ({ sidebarState, ifUserOnMobile }) => {
  return (
    <div className='chat-box'>
      <span
        className={
          ifUserOnMobile && sidebarState
            ? 'chat-box-hidden chat-align'
            : 'chat-align'
        }
      >
        <input className='chat' type='text' id='chatbox-chat' />
        <div className='label-chat' htmlFor='chatbox-chat'>
          Chat here
        </div>
      </span>
    </div>
  )
}
export default ChatBoxDiv
