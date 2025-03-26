const ChatBoxDiv = () => {
  return (
    <div className='chat-box'>
      <span className='chat-align'>
        <input className='chat' type='text' id='chatbox-chat' />
        <div className='label-chat' htmlFor='chatbox-chat'>
          Chat here
        </div>
      </span>
    </div>
  )
}
export default ChatBoxDiv
