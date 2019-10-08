// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {


  render() {
    //   <Todo key={id} task={task} completed={completed} toggleTodo={toggleTodo} />

    const { todos, toggleTodo, handleSearchChange ,searchText,searchTasks,clearTodo} = this.props;
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
            toggleTodo={() => toggleTodo(todo, todos)}
            clearTodo={()=>{clearTodo(todo)}}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
