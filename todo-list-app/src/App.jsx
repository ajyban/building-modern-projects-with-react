import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: "task 1", isCompleted: true },
    { text: "task 2", isCompleted: true }
  ]);
  const [inCompletedTodos, setInCompletedTodos] = useState([
    { text: "task 3", isCompleted: false },
    { text: "task 4", isCompleted: false }
  ]);

  useEffect(() => {
    console.log(completedTodos, inCompletedTodos)
  }, [completedTodos, inCompletedTodos])

  function markTodoAsComplete(text) {
    const todo = inCompletedTodos.find(t => t.text === text);
    setCompletedTodos(prev => [...prev, { ...todo, isCompleted: true }]);
    setInCompletedTodos(inCompletedTodos.filter(t => t.text !== text));
  }

  function markTodoAsDelete(text) {
    setCompletedTodos(completedTodos.filter(t => t.text !== text));
  }

  function onCreateClick(text) {
    setInCompletedTodos([...inCompletedTodos, { text, inComplete: false }])
  }
  return (
    <>
      <ToDoList
        completedItems={completedTodos}
        incompleteItems={inCompletedTodos}
        onCompletedClick={markTodoAsComplete}
        onDeleteClick={markTodoAsDelete}
        onCreateClick={onCreateClick}
      />
    </>
  )
}

export default App
