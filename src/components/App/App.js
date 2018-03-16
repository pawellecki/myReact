import React, {Component} from 'react';
import styles from './App.css';
import ToDoColumn from './ToDoColumn/ToDoColumn';
import InProgressColumn from './InProgressColumn/InProgressColumn';
import DoneColumn from './DoneColumn/DoneColumn';

export default class App extends Component {
    render() {
        return (
            <div className="plecy">
                <ToDoColumn />
                <InProgressColumn />
                <DoneColumn />
            </div>
        );
    }
}
