import './App.css'
import ToDoList from './ToDoList'

function App() {


  function onCreateClick(text) {
    setInCompletedTodos([...inCompletedTodos, { text, inComplete: false }])
  }
  return (
    <>
      <ToDoList    
        onCreateClick={onCreateClick}
      />
    </>
  )
}

export default App
