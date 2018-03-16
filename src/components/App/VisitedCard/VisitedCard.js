import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './VisitedCard.css';

class VisitedCard extends Component {
  render() {
    return (
      <div styleName='visited'>dd</div>
    );
  }
}

export default CSSModules(VisitedCard, styles);
