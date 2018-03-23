import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import CreateList from './components/CreateList/CreateList';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const Root = () => {
 	return (
 		<Router>
 			<div className="route-container">
	 			<Route exact path="/" component={CreateList} />
	 			<Route path="/list/:listId" component={App} />
	 		</div>	
 		</Router>
 	)
}

render(<Root />, document.getElementById('root'));
