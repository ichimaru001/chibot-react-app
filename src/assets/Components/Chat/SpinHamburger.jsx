const SpinHamburger = () => {
  return (
    <label className='spin-hamburger' htmlFor='spin-hamburger-input'>
      <span className='spin-hamburger-circle'></span>
      <input
        type='checkbox'
        id='spin-hamburger-input'
        className='spin-hamburger-input-chat'
        onClick={() => {
          setSidebarState(!sidebarState)
          showHideSidebar()
        }}
      />
      <span className='spin-hamburger-arm'></span>
    </label>
  )
}
export default SpinHamburger
