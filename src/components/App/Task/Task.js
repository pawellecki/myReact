import React, {Component} from 'react';
import styles from './task.css';

export default class Task extends Component {
    createCopyTask(e) {
        const copiedTask = {
            title: e.props.details.title,
            description: e.props.details.description,
            status: e.props.details.status
        }
        this.props.copyTask(copiedTask);
    }

    render() {
        const {details, index} = this.props;
        return (
            <li className="taskLi">
                <h2 className="task-title">{details.title}</h2>
                <h3 className="task-description">{details.description}</h3>
                <h4 className="task-status"><i className={details.status}></i></h4>
                <div className="task-buttons-cover">
                    {/*<button className="move-task" onClick={() => this.props.moveTaskIntoProgress(index)}><i className="fa fa-arrow-right"></i></button>*/}
                    <button className="move-task" onClick={(e) => this.createCopyTask(this)}><i className="fa fa-arrow-right"></i></button>
                    <button className="remove-task" onClick={() => this.props.removeTask(index)}><i className="fa fa-times"></i></button>
                </div>
            </li>
        );
    }
}
