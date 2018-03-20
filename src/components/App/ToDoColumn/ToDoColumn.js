import React, {Component} from 'react';
import styles from './toDoColumn.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

export default class ToDoColumn extends Component {
    render() {
        const tasksIds = Object.keys(this.props.newTasksList);
        return (
            <div className="column-cover">
                <h2 className="column-title">Planowane</h2>
                <AddTaskForm addTask={this.props.addTask}/>
                <ul className="tasksUl">
                    {
                        tasksIds
                            .map(key => <Task key={key} index={key}
                                details={this.props.newTasksList[key]}
                                moveTaskIntoProgress={this.props.moveTaskIntoProgress}
                            />)
                    }
                    <li className="taskLi">
                        <h2>przykladowy tytul taska</h2>
                        <h3>opis mojego taska czyli wiecej szczegolow poprosze
                            by wiedziec o co sie rozchodzid</h3>
                        <h4>wazne</h4>
                    </li>
                </ul>
                <button><i className="fa fa-arrow-right"></i></button>
                <button className="remove-task"><i className="fa fa-times"></i></button>
            </div>
        );
    }
}