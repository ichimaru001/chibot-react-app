const ExpandPWDiv = () => {
  return (
    <div className='subinfo-pw-expand-div-avatar subinfo-pw-expand-div-hidden'>
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
