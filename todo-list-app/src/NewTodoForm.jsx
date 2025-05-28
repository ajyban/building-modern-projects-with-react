import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from './todoSlice';

export default function NewTodoForm() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleCreate(text) {
    dispatch(createTodo(text))
  }
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        handleCreate(text);
        setText('')
      }}>Create</button>
    </div>
  )
}