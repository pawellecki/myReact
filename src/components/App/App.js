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
		this.removeTask = this.removeTask.bind(this);

		this.state = {
            newTasksList: {},
            tasksInProgress: {},
            tasksDone: {}
        }

	}
	// componentWillMount() {
		// const localStorageRef = localStorage.getItem(`tasksInProgress-${this.props.match.params.listId}`)
		// if(localStorageRef) {
		// 	this.setState({
         //        tasksInProgress: JSON.parse(localStorageRef)
		// 	});
		// }
	// }

	// componentWillUpdate(nextProps, nextState) {
		// console.log({nextProps, nextState})
	// 	localStorage.setItem(`newTasksList-${this.props.match.params.listId}`, JSON.stringify(nextState.newTasksList))
	// }

	addTask(task) {
		const newTasksList = {...this.state.newTasksList};
		const timeKey = Date.now();
		newTasksList[`task-${timeKey}`] = task;
		this.setState({ newTasksList })

	}

    removeTask(key) {
        const newTasksList = {...this.state.newTasksList};
        // const tasksInProgress = {...this.state.tasksInProgress};
        delete newTasksList[key];
        this.setState({ newTasksList })
	}

    moveTaskIntoProgress(key) {
		console.log(key)
        const newTasksList = [...this.state.newTasksList];
        newTasksList.filter((_, i) => i !== key);
		const tasksInProgress = [...this.state.tasksInProgress];

        tasksInProgress[key] = 1;
		this.setState({ tasksInProgress, newTasksList })
	}

	render() {
		return (
			<div className="appCover">
				<ToDoColumn
					newTasksList={this.state.newTasksList}
					params={this.props.match.params}
					addTask={this.addTask}
					removeTask={this.removeTask}
					moveTaskIntoProgress={this.moveTaskIntoProgress}
				/>
				<InProgressColumn
					newTasksList={this.state.newTasksList}
					tasksInProgress={this.state.tasksInProgress}
					params={this.props.match.params}
                    removeTask={this.removeTask}
				/>
				<DoneColumn />
			</div>
		);
	}
}
