import React, { Component } from 'react';
import styles from './toDoColumn.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

export default class ToDoColumn extends Component {
  render() {
    return (
      <div className="cover-to-do">
      	do zrobieniaa
      	<AddTaskForm addTask={this.props.addTask}/>
		<Task />
      </div>

    );
  }
}
