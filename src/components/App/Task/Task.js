import React, { Component } from 'react';
import styles from './task.css';

export default class Task extends Component {
	// const { title } = this.props;
  render() {
    return (
      <li className="taskLi">
      	<h2>pojedynczy task</h2>
      	<h3></h3>
      	{/*<button onClick={this.props.addToToDoColumn}></button>*/}
      </li>
    );
  }
}
