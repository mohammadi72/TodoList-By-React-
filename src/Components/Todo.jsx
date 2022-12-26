const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div
        className={`todoText ${todo.isCompleted ? "completed" : ""}`}
        onClick={onComplete}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className="edit btn">
          Edit
        </button>
        <button onClick={onDelete} className="remove btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
