import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import ChooseAlbum from './components/ChooseAlbum/ChooseAlbum';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
 	return (
 		<Router>
 			<div className="route-container">
	 			<Route exact path="/" component={ChooseAlbum} />
	 			<Route path="/list/:listId" component={App} />
	 		</div>	
 		</Router>
 	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
