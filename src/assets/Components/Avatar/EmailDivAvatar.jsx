const EmailDivAvatar = ({ isEditingEmailComp, userEmailComp }) => {
  return (
    <div className='subinfo-div-avatar'>
      <label
        className='subinfo-span-avatar'
        htmlFor='subinfo-input-avatar-email'
      >
        Email
      </label>
      {isEditingEmailComp ? (
        <input
          id='subinfo-input-avatar-email'
          className='subinfo-input-avatar'
          type='text'
        />
      ) : (
        <span className='subinfo-input-avatar'>{userEmailComp}</span>
      )}
    </div>
  )
}
export default EmailDivAvatar
