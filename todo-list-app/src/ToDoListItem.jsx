import { useDispatch } from 'react-redux'
import { markTodoAsCompleted, markTodoAsDeleted } from './todoSlice'

export default function ToDoListItem({ todo }) {
  const dispatch = useDispatch();
  function handleDelete(text) {
    dispatch(markTodoAsDeleted(text))
  }
  function handleComplete(text) {
    dispatch(markTodoAsCompleted(text))
  }
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => handleDelete(todo.text)}>Delete Item</button>
        : <button onClick={() => handleComplete(todo.text)}>Mark as complete</button>
      }
    </div >
  )
}