import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { localData } from "./data/localStore";
import './App.css';
const {
  getLocalStorageData,
  setLocalStorageData,
  clearLocalStorage
} = localData;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      searchText:"",
    };
  }

  componentDidMount() {
    const todos = getLocalStorageData();
    console.log(todos);
    if (todos !== null) this.setState({ todos });
  }

  addTodo = todo => {
    todo = { ...todo, ...{ id: Date.now() } };

    const newTodos = [...this.state.todos, todo];

    this.setState({
      todos: newTodos
    });

    setLocalStorageData(newTodos);
  };

  toggleTodo = (todo, todos) => {
    const copyOfTodo = { ...todo };
    const { completed, id } = copyOfTodo;

    if (completed) copyOfTodo.completed = false;
    else copyOfTodo.completed = true;

    const neWfilteredArr = todos.filter(el => el.id !== id);

    this.setState({
      todos: neWfilteredArr.concat(copyOfTodo)
    });
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todos: []
    });

    clearLocalStorage();
  };

  handleSearchChange = evt => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value
    });
  };

  searchTasks = ()=> {
    const {searchText,todos} = this.state;
    const todo = todos.find(el => el.task.toLowerCase() === searchText.toLowerCase());
    this.setState({
      todos:[todo]
    })
  }
clearTodo = () => {
  
}
  render() {
    const { todos,searchText } = this.state;
    return (
      <div className="App-container">
      <div className="App">
        <div className="App-content">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo} />
        <TodoList
          todos={todos}
          toggleTodo={this.toggleTodo}
          searchText={searchText}
          searchTasks={this.searchTasks}
          handleSearchChange={this.handleSearchChange}
        />
        </div>
        
      </div>
      </div>
    );
  }
}

export default App;
