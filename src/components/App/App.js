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
		this.moveTaskIntoProgress = this.moveTaskIntoProgress.bind(this);

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
    moveTaskIntoProgress(key) {
		const tasksInProgress = {...this.state.tasksInProgress};
        tasksInProgress[key] = 1
		this.setState({ tasksInProgress })
	}

	render() {
		return (
			<div className="appCover">
				<ToDoColumn newTasksList={this.state.newTasksList}
					addTask={this.addTask}
					moveTaskIntoProgress={this.moveTaskIntoProgress}
				/>
				<InProgressColumn newTasksList={this.state.newTasksList}
					tasksInProgress={this.state.tasksInProgress}/>
				<DoneColumn />
			</div>
		);
	}
}
