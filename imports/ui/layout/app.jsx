import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div className="main-container container">
        <Navbar/>
        { this.props.main }
      </div>
    );
  }
}
