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
      <form ref={(input) => this.taskForm = input} onSubmit={(e) => this.createTask(e)}>
      	<input ref={(input) => this.title = input} type="text" placeholder="tytuł zadania" />
      	<textarea ref={(input) => this.description = input} type="text" placeholder="opis zadania" />
      	<select ref={(input) => this.status = input}>
      		<option value="wazne">wazne</option>
      		<option value="niewazne">niewazne</option>
      	</select>
      	<button type="submit">dodaj taskaaaa</button>
      </form>
    );
  }
}
