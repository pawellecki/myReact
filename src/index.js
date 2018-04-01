import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { eventsReducer } from './reducers/eventsReducer';
import './index.css';
import App from './components/App/App.jsx';
import NotFound from "./components/App/NotFound";
import CreateList from './components/CreateList/CreateList';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const store = createStore(eventsReducer);
const Root = () => {	
 	return <Provider store={store}>
      <Router>
        <Switch>
          <div className="route-container">
            <Route exact path="/" component={CreateList} />
            <Route path="/list/:listId" component={App} />
            <Route component={NotFound} />
          </div>
        </Switch>
      </Router>
    </Provider>;
}

render(<Root />, document.getElementById('root'));
