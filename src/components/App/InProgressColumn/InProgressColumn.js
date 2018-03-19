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
            <li key={key}>
                {task.title}<hr/>
                {task.description}<hr/>
                {task.status}
            </li>
        )
    }

    render() {
        const tasksIds = Object.keys(this.props.tasksInProgress);
        return (
            <div>
                <div className="coverIpro">
                    w trakcie robieniam
                    <ul className="inProgressUl">
                        {tasksIds.map(this.renderInProgressList)}
                    </ul>

                </div>

            </div>
        );
    }
}

