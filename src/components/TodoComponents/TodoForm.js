// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        id: "",
        task: "",
        completed: false
      }
    };

    this.initFormData = this.state.formData;
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    const { formData } = this.state;

    this.setState({
      formData: { ...formData, ...{ [name]: value } }
    });
  };

  handleClick = formData => {
    this.props.addTodo(formData);
    this.setState({
      formData: this.initFormData
    });
  };

  render() {
    const {
      formData,
      formData: { task }
    } = this.state;
    return (
      <form
      className="todo-form"
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          this.handleClick(formData);
        }}
      >
        <div className="todo-form-content">
          <div>
            <input name="task" onChange={this.handleChange} value={task} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
          <div>
            <button onClick={this.props.clearTodo}>clear all</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TodoList;
