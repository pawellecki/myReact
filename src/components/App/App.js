import React, {Component} from 'react';
import './styles.css';
import PlansCard from './PlansCard/PlansCard';
import VisitedCard from './VisitedCard/VisitedCard'

export default class App extends Component {
    render() {
        return (
            <div>
                <PlansCard />
                <VisitedCard />
            </div>
        );
    }
}
