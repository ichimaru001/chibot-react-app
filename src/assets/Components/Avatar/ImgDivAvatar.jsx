import { PiCameraPlusBold } from 'react-icons/pi'

const ImgDivAvatar = ({ editingPFPFunc, isEditingPFP }) => {
  return (
    <div className='img-main-div-avatar'>
      <span
        id='img-main-avatar-id'
        className={
          isEditingPFP
            ? 'img-main-avatar-activated img-main-avatar'
            : 'img-main-avatar'
        }
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
