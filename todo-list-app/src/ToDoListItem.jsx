export default function ToDoListItem({ todo, onCompletedClick, onDeleteClick }) {
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete!</p>}
            {todo.isCompleted
                ? <button onClick={()=>onDeleteClick(todo.text)}>Delete Item</button>
                : <button onClick={()=>onCompletedClick(todo.text)}>Mark as complete</button>}
        </div>
    )
}