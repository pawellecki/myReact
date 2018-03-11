import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import ChooseAlbum from './components/ChooseAlbum/ChooseAlbum';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
