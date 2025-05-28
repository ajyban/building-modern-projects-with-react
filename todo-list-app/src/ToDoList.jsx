import NewTodoForm from './NewTodoForm';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({ completedItems, incompleteItems, onDeleteClick, onCompletedClick, onCreateClick }) {

  return (
    <div>
      <h1>My To Do</h1>
      <p>New form</p>
      <NewTodoForm onCreateClick={onCreateClick} />
      <h3>Completed</h3>
      {completedItems.map((item, index) => <ToDoListItem key={index} todo={item} onDeleteClick={onDeleteClick} />)}
      <h3>InComplete</h3>
      {incompleteItems.map((item, index) => <ToDoListItem key={index} todo={item} onCompletedClick={onCompletedClick} />)}
    </div>
  )
}