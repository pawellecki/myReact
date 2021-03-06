import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        const {details, index} = this.props;
        return (
            <li className="tasks-li">
                <h2 className="task-title">{details.title}</h2>
                <h3 className="task-description">{details.description}</h3>
                <h4 className="task-status"><i className={details.status}></i></h4>
                <div className="task-buttons-cover">
                    <button className="remove-task" onClick={() => this.props.removeTask(index)}><i className="fa fa-times"></i></button>
                </div>
            </li>
        );
    }
}
