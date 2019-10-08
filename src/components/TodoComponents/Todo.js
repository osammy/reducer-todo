import React from "react";
import "./Todo.css";
const Todo = props => {
  let { task, completed } = props.todo;
  const { toggleTodo,clearTodo } = props;
  completed =
    completed !== undefined && completed === false
      ? "not completed"
      : "completed";
  return (
    <div class="todo">
      <div>{task}</div>
      <div>
        <button onClick={toggleTodo}>{completed}</button>
      </div>
      {/* <div>
        <button onClick={clearTodo}>X</button>
      </div> */}
    </div>
  );
};

export default Todo;
