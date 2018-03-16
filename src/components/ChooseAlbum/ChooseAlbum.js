import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChooseAlbum.css';

export default class ChooseAlbum extends Component {

	goToList() {
		console.log('test');
console.log(this.createListInput.value);
		const listId = this.createListInput.value;
		this.context.router.transitionTo(`/list/${listId}`);
	} 

	render() {
    return (
      <form className="list-name">
      	<h2>Podaj nazwę nowej listy</h2>
				<input type="text" required placeholder="My album name" 
					onSubmit={this.goToList.bind(this)}
					ref={(input) => {this.createListInput = input}}/>
					<button type="submit"></button>
      </form>
    );
  }
}

ChooseAlbum.contextTypes = {
	router: PropTypes.object
}