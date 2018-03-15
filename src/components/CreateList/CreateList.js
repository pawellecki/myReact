import React, { Component } from 'react';
import './CreateList.css';

export default class CreateList extends Component {

    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }

    createList(event) {
        event.preventDefault();
        console.log(this);
        console.log(this.newListName.value);
        const listId = this.newListName.value;
        this.props.history.push(`/list/${listId}`);
    }

    render() {
        return (
            <form className="list-name" onSubmit={this.createList}>
                <h2>Podaj nazwę nowej listy</h2>
                <input type="text" required placeholder="My album name"
                       ref={(input) => { this.newListName = input }}/>
                <button type="submit">Utwórz listę</button>
            </form>
        );
    }
}