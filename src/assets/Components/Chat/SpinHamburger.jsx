const SpinHamburger = ({ setSideBarStateComp, sidebarStateComp }) => {
  const showHideSidebar = () => {
    const sidebar = document.getElementById('sidebar-chat')
    if (sidebarStateComp === false) {
      sidebar.classList.remove('sidebar-hidden')
      return
    }
    if (sidebarStateComp === true) {
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
          setSideBarStateComp(!sidebarStateComp)
          showHideSidebar()
        }}
      />
      <span className='spin-hamburger-arm'></span>
    </label>
  )
}
export default SpinHamburger
