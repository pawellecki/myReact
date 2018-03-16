import React, {Component} from 'react';
import styles from './App.css';
import ToDo from './ToDo/ToDo';
import Done from './Done/Done'

export default class App extends Component {
    render() {
        return (
            <div className="plecy">
                <ToDo />
                <Done />
            </div>
        );
    }
}
