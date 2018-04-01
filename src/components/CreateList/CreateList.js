import React, { Component } from 'react';

export default class CreateList extends Component {

    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }
    
    createList = event => {
        event.preventDefault();
        const listId = this.newListName.value;
        this.props.history.push(`/list/${listId}`);
    }
    render() {
        return (
            <form className="create-list-form" onSubmit={this.createList}>
                <h2>Podaj nazwę nowej listy</h2>
                <input 
                  type="text" 
                  required 
                  placeholder="nazwa..."  
                  id="create-list-form"
                  ref={input => this.newListName = input}
                />
                <label for="create-list-form" />
                <button type="submit">Utwórz listę</button>
            </form>
        );
    }
}