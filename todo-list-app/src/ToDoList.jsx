import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({ onCreateClick }) {

  const todos = useSelector(state => state.todos.value);


  return (
    <div>
      <h1>My To Do</h1>
      <p>New form</p>
      <NewTodoForm />
      <h3>Completed</h3>
      {todos.map((item, index) => <ToDoListItem key={index} todo={item} />)}
      <h3>InComplete</h3>
      {todos.map((item, index) => <ToDoListItem key={index} todo={item} />)}
    </div>
  )
}