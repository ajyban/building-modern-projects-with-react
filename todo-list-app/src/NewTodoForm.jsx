import { useState } from 'react'

export default function NewTodoForm({ onCreateClick }) {

  const [text, setText] = useState('');

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        onCreateClick(text);
        setText('')
      }}>Create</button>
    </div>
  )
}