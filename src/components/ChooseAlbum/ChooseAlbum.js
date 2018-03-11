import React, { Component } from 'react';
import './ChooseAlbum.css';

export default class ChooseAlbum extends Component {
  render() {
    return (
      <form className="album-name">
		<input type="text" required placeholder="My album name"/>
      </form>
    );
  }
}
