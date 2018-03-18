import React, {Component} from 'react';
import styles from './App.css';
import ToDoColumn from './ToDoColumn/ToDoColumn';
import InProgressColumn from './InProgressColumn/InProgressColumn';
import DoneColumn from './DoneColumn/DoneColumn';
import Task from './Task/Task';

export default class App extends Component {
	constructor() {
		super();

		this.addTask = this.addTask.bind(this);
		this.moveTaskToInProgress = this.moveTaskToInProgress.bind(this);

		this.state = {
			newTasksList: {},
			tasksInProgress: {},
			tasksDone: {}
		}
	}

	addTask(task) {
		const newTasksList = {...this.state.newTasksList};
		const timeKey = Date.now();
		newTasksList[`task-${timeKey}`] = task;
		this.setState({ newTasksList })

	}
	moveTaskToInProgress(key) {
		const tasksInProgress = {...this.state.tasksInProgress};
		this.setState({ tasksInProgress })
	}

	render() {
		return (
			<div className="appCover">
				<ToDoColumn addTask={this.addTask} newTasksList={this.newTasksList} />
				<InProgressColumn />
				<DoneColumn />
				<ul className="tasksUl">
	             {/*<h2>{this.props.newTasks.status}</h2>*/}
	 		 		{
	              		Object
	              		.keys(this.state.newTasksList)
	             		.map(key => <Task key={key} />)
	         		}
      			</ul>
			</div>
		);
	}
}
