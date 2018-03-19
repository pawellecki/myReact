import React, { Component } from 'react';
import styles from './task.css';

export default class Task extends Component {
  render() {
      const { details, index } = this.props;
      return (
      <li className="taskLi">
      	<h2>pojedynczy task</h2>
      	<h3>{details.title}</h3>
      	<h3>{details.description}</h3>
      	<h3>{details.status}</h3>
      	{/*<button className="intoProgress">dodaj do in progress</button>*/}
      	<button onClick={() => this.props.moveTaskIntoProgress(index)}>dodaj do in progress</button>
      </li>
    );
  }
}
