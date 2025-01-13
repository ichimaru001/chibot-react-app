const PWDivAvatar = ({ isEditingPWComp, userPWComp }) => {
  return (
    <div className='subinfo-pw-div-avatar subinfo-div-avatar'>
      <label htmlFor='subinfo-input-avatar-pw' className='subinfo-span-avatar'>
        Password
      </label>
      {isEditingPWComp ? (
        <input
          id='subinfo-input-avatar-pw'
          className='subinfo-input-avatar'
          type='text'
        />
      ) : (
        <span className='subinfo-input-avatar'>{userPWComp}</span>
      )}
    </div>
  )
}
export default PWDivAvatar
