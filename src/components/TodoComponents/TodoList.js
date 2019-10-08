import React, { Component } from "react";
import Todo from "./Todo";

function TodoList (props) {

    const { todos, toggleTodo, handleSearchChange ,searchText,searchTasks,removeTodo} = props;
    return (
      <div className="todo-list">
        <div className="todo-list-input-div">
          <input
          className="todo-list-input"
            name="searchText"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button onClick={searchTasks}>Search</button>
        </div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo)}
            removeTodo={()=>{removeTodo(todo.id)}}
          />
        ))}
      </div>
    );
}

export default TodoList;
