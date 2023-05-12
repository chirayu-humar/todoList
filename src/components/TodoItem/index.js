// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteButton} = props
  const {title, id} = details
  const buttonId = `button${id}`
  const listElementId = `listElement${id}`
  const DeleteFunc = () => {
    deleteButton()
  }

  return (
    <li id={listElementId} className="outer">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <button type="button" id={buttonId} onClick={deleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
