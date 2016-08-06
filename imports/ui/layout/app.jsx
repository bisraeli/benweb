import React from 'react';
import Navbar from '../components/navbar.jsx';
import MobileNavbar from '../components/mobile-navbar.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div className="site-wrap">
        <MobileNavbar/>
        <div className="push-wrap">
          <div className="main-container container">
            <Navbar/>
            { this.props.main }
          </div>
        </div>
      </div>
    );
  }
}
