const UserNameDivAvatar = ({
  editingUserFunc,
  isEditingNameComp,
  userNameComp,
}) => {
  return (
    <div className='username-main-div-avatar'>
      {isEditingNameComp ? (
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
            editingUserFunc()
          }}
        >
          {userNameComp}
        </span>
      )}
      <span className='username-main-underline-avatar'></span>
    </div>
  )
}
export default UserNameDivAvatar
