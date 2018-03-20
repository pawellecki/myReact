import React, { Component } from 'react';
import styles from './addTaskForm.css';

export default class AddTaskForm extends Component {
	createTask(event) {
		event.preventDefault();
		const newTask = {
			title: this.title.value,
			description: this.description.value,
			status: this.status.value
		}
		this.props.addTask(newTask);
		this.taskForm.reset();
	}

  render() {
    return (
      <form className="add-task-form" ref={(input) => this.taskForm = input} onSubmit={(e) => this.createTask(e)}>
      	<input ref={(input) => this.title = input} type="text" placeholder="tytuł zadania" />
      	<textarea ref={(input) => this.description = input} type="text" placeholder="opis zadania" />
      	<select ref={(input) => this.status = input}>
      		<option value="fa fa-thermometer-full">priorytet</option>
      		<option value="fa fa-thermometer-three-quarters">ważne</option>
			<option value="fa fa-thermometer-half">może poczekać</option>
			<option value="fa fa-thermometer-empty">przy okazji</option>
      	</select>
      	<button type="submit">dodaj zadanie</button>
      </form>
    );
  }
}
