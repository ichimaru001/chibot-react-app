const SaveChangesDiv = ({ setEditingFalse, saveChangesFunc }) => {
  return (
    <div className='save-changes-div-avatar save-changes-div-hidden-avatar'>
      <button
        className='btn-save-changes-avatar'
        onClick={() => {
          saveChangesFunc()
        }}
      >
        Save changes
      </button>
      <button
        className='btn-cancel-avatar'
        onClick={() => {
          setEditingFalse()
        }}
      >
        Cancel
      </button>
    </div>
  )
}
export default SaveChangesDiv
