const SpinHamburger = ({ setSideBarState, sidebarState }) => {
  const showHideSidebar = () => {
    const sidebar = document.getElementById('sidebar-chat')
    if (sidebarState === false) {
      sidebar.classList.remove('sidebar-hidden')
      return
    }
    if (sidebarState === true) {
      sidebar.classList.add('sidebar-hidden')
      return
    }
  }

  return (
    <label className='spin-hamburger' htmlFor='spin-hamburger-input'>
      <span className='spin-hamburger-circle'></span>
      <input
        type='checkbox'
        id='spin-hamburger-input'
        className='spin-hamburger-input-chat'
        onClick={() => {
          setSideBarState(!sidebarState)
          showHideSidebar()
        }}
      />
      <span className='spin-hamburger-arm'></span>
    </label>
  )
}
export default SpinHamburger
