import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    //item=>findIndex=>clone=>
    const index = todos.findIndex((todo) => todo.id === id);
    // clone=>Do Not Mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    //clone:todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updatedTodo = (id, newValue) => {
    //item=>findIndex=>clone=>
    const index = todos.findIndex((todo) => todo.id === id);
    // clone=>Do Not Mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    //clone:todos
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "UnCompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        // filterTodos={filterTodos}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updatedTodo}
      />
    </div>
  );
};

export default TodoApp;
