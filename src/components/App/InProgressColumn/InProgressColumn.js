import React, {Component} from 'react';
import styles from './inProgressColumn.css';

export default class InProgressColumn extends Component {
    constructor() {
        super();
        this.renderInProgressList = this.renderInProgressList.bind(this);
    }

    renderInProgressList(key) {
        const task = this.props.newTasksList[key];
        // const task = this.props.tasksInProgress[key];
        return (
            <li className="taskLi" key={key}>
                <h2 className="task-title">{task.title}</h2>
                <h3 className="task-description">{task.description}</h3>
                <h4 className="task-status">{task.status}</h4>
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

