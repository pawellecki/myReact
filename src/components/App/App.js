import React, {Component} from 'react';
import styles from './App.css';
import ToDoColumn from './ToDoColumn/ToDoColumn';
import InProgressColumn from './InProgressColumn/InProgressColumn';
import DoneColumn from './DoneColumn/DoneColumn';

export default class App extends Component {
	constructor() {
		super();
		this.addTask = this.addTask.bind(this);
		this.state = {
			tasks: {

			},
			fisz: {

			}
		}
	}

	addTask(task) {
		const tasks = {...this.state.tasks};
		const timeKey = Date.now();
		tasks[`task-${timeKey}`] = task;
		this.setState({ tasks })
	}

	render() {
		return (
			<div className="appCover">
				<ToDoColumn addTask={this.addTask}/>
				<InProgressColumn />
				<DoneColumn />
			</div>
		);
	}
}
