'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          Sample App by Matthew
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is our React on Node Demo App!
          </p>
        </footer>
      </div>
    );
  }
}
