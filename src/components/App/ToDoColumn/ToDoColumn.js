import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

export default class ToDoColumn extends Component {
    render() {
        const tasksKeys = Object.keys(this.props.newTasksList);
        return (
            <div className="column-cover">
                <h2 className="column-title">Lista zadań</h2>
                <AddTaskForm addTask={this.props.addTask}/>
                <ul className="tasks-ul">
                    {
                        tasksKeys.reverse()
                            .map(key => <Task key={key} index={key}
                                details={this.props.newTasksList[key]}
                                removeTask={this.props.removeTask}
                                />)
                    }
                </ul>
            </div>
        );
    }
}