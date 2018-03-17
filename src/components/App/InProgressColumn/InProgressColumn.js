import React, { Component } from 'react';
import styles from './inProgressColumn.css';

export default class InProgressColumn extends Component {
  render() {
    return (
      // <div className="cover-in-pro">w trakcie robienia</div>
      <div className={styles.coverIpro}>w trakcie robienia</div>
    );
  }
}

