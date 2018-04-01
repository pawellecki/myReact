// import React, {Component} from 'react';
// import ToDoColumn from './ToDoColumn/ToDoColumn';
// import { connect } from 'react-redux';

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.addTask = this.addTask.bind(this);
// 		this.removeTask = this.removeTask.bind(this);

// 		this.state = {
//             newTasksList: {}
//         }

// 	}
// 	componentWillMount() {
// 		const localStorageRef = localStorage.getItem(`newTasksList-${this.props.match.params.listId}`)
// 		if(localStorageRef) {
// 			this.setState({
//                 newTasksList: JSON.parse(localStorageRef)
// 			});
// 		}
// 	}
// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem(`newTasksList-${this.props.match.params.listId}`, JSON.stringify(nextState.newTasksList))
// 	}

// 	addTask(task) {
// 		const newTasksList = {...this.state.newTasksList};
// 		const timeKey = Date.now();
// 		newTasksList[`task-${timeKey}`] = task;
// 		this.setState({ newTasksList })

// 	}

//     removeTask(key) {
//         const newTasksList = {...this.state.newTasksList};
//         delete newTasksList[key];
//         this.setState({ newTasksList })
// 	}

// 	render() {
// 		return (
// 			<div className="app-cover">
// 				<ToDoColumn
// 					newTasksList={this.state.newTasksList}
// 					addTask={this.addTask}
// 					removeTask={this.removeTask}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return { ...state };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//     	// testEvent: () => dispatch(actions.testEvent())
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);