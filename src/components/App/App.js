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

	addTask(task) {
		const newTasksList = {...this.state.newTasksList};
		const timeKey = Date.now();
		newTasksList[`task-${timeKey}`] = task;
		this.setState({ newTasksList })

	}

	componentDidUpdate(nextProps, nextState) {

	}

    removeTask(key) {
        const newTasksList = {...this.state.newTasksList};
        const tasksInProgress = {...this.state.tasksInProgress};
        console.log("aaaaaaa")
        console.log(newTasksList)
        console.log(tasksInProgress)
        console.log("bbb")
        console.log("ccccccc")

		// const kk = Object.keys(newTasksList).filter((_, i) => i !== key)
        // console.log(kk)
        // console.log(Object.keys(newTasksList))
        // const filteredTasksList = Object.keys(newTasksList).filter((_, i) => i !== key);
        // console.log(filteredTasksList)
        // delete newTasksList[key]
        // this.setState({ newTasksList })
        //
        // const tasksInProgress = {...this.state.tasksInProgress};
        // delete tasksInProgress[key]
        // this.setState({ tasksInProgress })


            this.setState({
                // newTasksList: tasksInProgress
            });


        // const filtered = [newTasksList].filter(el => el !== key);
        // console.log(key)
        // this.setState({
			// newTasksList: this.state.newTasksList.filter(el => el !== (newTasksList[`task-${key}))
        // })

        // this.setState({
			// newTasksList: [...this.state.newTasksList].filter(el => el !== key)
        // })
				// : this.state.newTasksList.filter(el => el !== key)
        // })
        // this.setState({
        //     newTasksList: this.state.newTasksList.filter(function(person) {
        //     	return person !== key})
        // })
        // const newTasksList = [{...this.state.newTasksList;
        // this.setState({
        //     newTasksList: newTasksList.filter(key => key !== key)
        // })

	}


    moveTaskIntoProgress(key) {
		console.log(key)
        const newTasksList = {...this.state.newTasksList};
		const tasksInProgress = {...this.state.tasksInProgress};
        tasksInProgress[key] = 1;
		this.setState({ tasksInProgress })
	}

	render() {
		return (
			<div className="appCover">
				<ToDoColumn
					newTasksList={this.state.newTasksList}
					addTask={this.addTask}
					removeTask={this.removeTask}
					moveTaskIntoProgress={this.moveTaskIntoProgress}
				/>
				<InProgressColumn
					newTasksList={this.state.newTasksList}
					tasksInProgress={this.state.tasksInProgress}
					removeTask={this.removeTask}
				/>
				<DoneColumn />
			</div>
		);
	}
}
