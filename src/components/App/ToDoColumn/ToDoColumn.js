import React, { Component } from 'react';
import styles from './toDoColumn.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

export default class ToDoColumn extends Component {
  render() {
    return (
      <div className="cover-to-do">
      	do zrobieniaa
      	<AddTaskForm addTask={this.props.addTask} />
      	<ul className="tasksUl">
             {/*<h2>{this.props.newTasks.status}</h2>*/}
  {/*      	{*/}
      {/*          Object*/}
   {/*           .keys(this.state.newTasksList)*/}
  {/*            .map(key => <Task key={key} />)*/}
          {/*}*/}
      	</ul>
      </div>
    );
  }
}