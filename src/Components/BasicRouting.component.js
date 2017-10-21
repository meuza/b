import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Basic extends React.Component {
  render() {
    return (
      <div>
        <button> GET DATA </button>

        <button> Clear</button>

      </div>
    );
  }
}

export default Basic;
