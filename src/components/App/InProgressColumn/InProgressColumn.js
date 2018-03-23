import React, {Component} from 'react';
import styles from './inProgressColumn.css';

export default class InProgressColumn extends Component {
    constructor() {
        super();
        this.renderInProgressList = this.renderInProgressList.bind(this);
    }

    renderInProgressList(key) {
        const task = this.props.newTasksList[key];
        return (
            <li className="taskLi" key={key} index={key}>
                <h2 className="task-title">{task.title}</h2>
                <h3 className="task-description">{task.description}</h3>
                <h4 className="task-status"><i className={task.status}></i></h4>
                <div className="task-buttons-cover">
                    <button className="move-task" ><i className="fa fa-arrow-right"></i></button>
                    <button className="remove-task" onClick={(key) => this.props.removeTask(key)}><i className="fa fa-times"></i></button>
                    <button className="move-back-task"><i className="fa fa-arrow-left"></i></button>
                </div>
            </li>
        )
    }

    render() {
        const tasksIds = Object.keys(this.props.tasksInProgress);
        return (
            <div className="column-cover">
                <h2 className="column-title">Realizowane</h2>
                <ul className="inProgressUl">
                    {tasksIds.map(this.renderInProgressList)}
                </ul>
            </div>
        );
    }
}

