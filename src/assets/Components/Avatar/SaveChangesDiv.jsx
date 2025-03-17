const SaveChangesDiv = ({
  setEditingFalse,
  saveChangesFunc,
  isEditingEmail,
  isEditingPFP,
  isEditingName,
  needSaving,
}) => {
  return (
    <div
      className={`${
        isEditingEmail || isEditingPFP || isEditingName
          ? 'save-changes-editing-email'
          : ''
      } ${
        needSaving
          ? 'save-changes-div-avatar'
          : 'save-changes-div-hidden-avatar save-changes-div-avatar'
      } `}
    >
      <button
        className='btn-save-changes-avatar'
        onClick={() => {
          saveChangesFunc()
        }}
      >
        Save
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
