import React, {useState,useEffect,useReducer} from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { localData } from "./data/localStore";
import {todoReducer} from './reducers/reducers';
import * as todoActions from './actions/todo_actions';
import './App.css';
const {
  getLocalStorageData,
  setLocalStorageData,
  clearLocalStorage
} = localData;

function App()  {

  const [todos,dispatch] = useReducer(todoReducer,[]);
  const [searchText, setSearchText] = useState("");

  // useEffect(()=> {
  //   const todos = getLocalStorageData();
  //   console.log(todos);
  //   if (todos !== null) dispatch({action:todoActions.ADD_TODOS_FROM_LOCAL_STORE,payload:todos});
  // },[])

  const addTodo = todo => {
    todo = { ...todo, ...{ id: Date.now(), completedDate:null } };

    const newTodos = [...todos, todo];

    // setTodos(newTodos);
    dispatch({type:todoActions.ADD_TODO,payload:todo})

    setLocalStorageData(newTodos);
  };

  const toggleTodo = (todo) => {
    
    const copyOfTodo = { ...todo };
    const copyOfTodos = [...todos];
    const { completed, id } = copyOfTodo;

    if (completed) {
      copyOfTodo.completed = false;
      copyOfTodo.completedDate = null;
    }
    else {
      copyOfTodo.completed = true;
      copyOfTodo.completedDate = new Date();
    }

    const index = copyOfTodos.findIndex(el => el.id === id);
    copyOfTodos[index] = copyOfTodo;
    // setTodos(neWfilteredArr.concat(copyOfTodo));
    dispatch({type:todoActions.TOGGLE_TODO_COMPLETED,payload:copyOfTodos})
  };

  const clearTodos = e => {
    e.preventDefault();
    // setTodos([]);
    dispatch({type:todoActions.CLEAR_TODOS})
    clearLocalStorage();
  };

  const handleSearchChange = evt => setSearchText(evt.target.value);
  

  const searchTasks = ()=> {
    const {searchText,todos} = this.state;
    const todo = todos.find(el => el.task.toLowerCase() === searchText.toLowerCase());
    this.setTodos([todo]);
  }
  
const removeTodo = (id) => {
  const newTodos = todos.filter(el => el.id !== id);

  dispatch({type:todoActions.REMOVE_TODO,payload:newTodos})
}

    return (
      <div className="App-container">
      <div className="App">
        <div className="App-content">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          searchText={searchText}
          searchTasks={searchTasks}
          handleSearchChange={handleSearchChange}
          removeTodo={removeTodo}
        />
        </div>
        
      </div>
      </div>
    );
  }

export default App;
