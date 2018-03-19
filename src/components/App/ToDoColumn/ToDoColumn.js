import React, {Component} from 'react';
import styles from './toDoColumn.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

export default class ToDoColumn extends Component {
    // constructor() {
    //     super();
    //     this.renderNewTasksList = this.renderNewTasksList.bind(this);
    // }
    //
    // renderNewTasksList(key) {
    //     const task = this.props.newTasksList[key];
    //     // const task = this.props.tasksInProgress[key];
    //     return (
    //         <li key={key}>
    //             {task.title}
    //             {task.description}
    //             {task.status}
    //         </li>
    //     )
    // }

    render() {
        const tasksIds = Object.keys(this.props.newTasksList);
        return (
            <div className="cover-to-do">
                do zrobieniaa
                <AddTaskForm addTask={this.props.addTask}/>
                <h4>{tasksIds}</h4>
                <ul className="tasksUl">
                    {

                        tasksIds
                            .map(key => <Task key={key} index={key}
                                              details={this.props.newTasksList[key]}
                                              moveTaskIntoProgress={this.props.moveTaskIntoProgress}
                            />)


                    }
                </ul>
            </div>

        );
    }
}