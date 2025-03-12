const ExpandPWDiv = ({ isEditingPW }) => {
  return (
    <div
      className={
        isEditingPW
          ? 'subinfo-pw-expand-div-avatar'
          : 'subinfo-pw-expand-div-hidden subinfo-pw-expand-div-avatar'
      }
    >
      <div className='subinfo-confirm-pw-div-avatar subinfo-div-avatar'>
        <label
          htmlFor='subinfo-input-avatar-confirm-pw'
          className='subinfo-span-avatar'
        >
          Confirm Password
        </label>
        {/* <span className='subinfo-input-avatar'>
                          **************
                        </span> */}
        <input
          id='subinfo-input-avatar-confirm-pw'
          className='subinfo-input-avatar'
          type='text'
        />
      </div>
    </div>
  )
}
export default ExpandPWDiv
