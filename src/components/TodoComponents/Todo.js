import React from "react";
import "./Todo.css";
import {formatDateAndTime} from '../../data/formatDate'

const removeBtnStyle = {
  background:'orangered',
  color:'#fff',
  padding:'15px',
}

const Todo = props => {
  let { task, completed,completedDate } = props.todo;
  const { toggleTodo,removeTodo } = props;
  completed =
    completed !== undefined && completed === false
      ? "NOT COMPLETE"
      : "COMPLETE";
  return (
    <div className="todo">
      <div>{task}</div>
      <div onClick={toggleTodo} className="toggle-class">
        <button >{completed}</button>
      </div>
      <div>
        <span >{formatDateAndTime(completedDate)}</span>
      </div>
      <div onClick={removeTodo} className="removeTodo">
        <button >X</button>
      </div>
    </div>
  );
};

export default Todo;
