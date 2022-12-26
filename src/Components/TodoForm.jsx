import { useEffect, useRef, useState } from "react";

const TodoForm = ({ edit, submitTodo }, props) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter Input pleaase!");
      return;
    }
    submitTodo(input);
    setInput(" ");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={edit ? "Update Todo" : "Add new Todo"}
          ref={inputRef}
        />
        <button
          type="submit"
          className={`btn ${edit ? "updateTodo" : "addTodo"}`}
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
