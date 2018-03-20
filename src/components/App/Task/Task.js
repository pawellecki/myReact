import React, {Component} from 'react';
import styles from './task.css';

export default class Task extends Component {
    render() {
        const {details, index} = this.props;
        return (
            <li className="taskLi">
                <h2 className="task-title">{details.title}</h2>
                <h3 className="task-description">{details.description}</h3>
                <h4 className="task-status"><i className={details.status}></i></h4>
                <button onClick={() => this.props.moveTaskIntoProgress(index)}><i className="fa fa-arrow-right"></i></button>
                <button className="remove-task"><i className="fa fa-times"></i></button>
            </li>
        );
    }
}
