import { PiCameraPlusBold } from 'react-icons/pi'

const ImgDivAvatar = ({ editingPFPFunc }) => {
  return (
    <div className='img-main-div-avatar'>
      <span
        id='img-main-avatar-id'
        className='img-main-avatar'
        onClick={() => {
          editingPFPFunc()
        }}
      >
        <PiCameraPlusBold className='img-main-icon-avatar' />
      </span>
    </div>
  )
}
export default ImgDivAvatar
