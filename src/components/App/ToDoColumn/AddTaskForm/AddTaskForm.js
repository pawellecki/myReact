import React, { Component } from 'react';

export default class AddTaskForm extends Component {
  createTask(event) {
    event.preventDefault();
    const newTask = {
      title: this.title.value,
      description: this.description.value,
      status: this.status.value,
    }
    this.props.addTask(newTask);
    this.taskForm.reset();
  }

  render() {
    return (
      <form className="add-task-form" 
         ref={(input) => this.taskForm = input} 
        onSubmit={(e) => this.createTask(e)} id="add-task-form">
        <input ref={(input) => this.title = input} required type="text" placeholder="tytuł zadania" />
        <label for="add-task-form"></label>
        <textarea ref={(input) => this.description = input} required type="text" placeholder="opis zadania" />
        <h3>Ważność:</h3>
        <i className="fa fa-caret-down" />
        <select ref={ input => this.status = input }>
          <option value="fa fa-thermometer-full">priorytet</option>
          <option value="fa fa-thermometer-three-quarters">ważne</option>
          <option value="fa fa-thermometer-half">może poczekać</option>
          <option value="fa fa-thermometer-empty">przy okazji</option>
        </select>
        <button type="submit">Dodaj </button>
      </form>
    );
  }
}
