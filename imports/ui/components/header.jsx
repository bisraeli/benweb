import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="header-button">
            <h1>Ben Israeli</h1>
            <h2>Private Tutor &amp; Learning Specialist</h2>
          </div>

          <div className="mobileNav">
            <div style={{outline:0}}>
              <span className="fa fa-bars"></span>
              <span className="fa fa-times"></span>
            </div>
          </div>

          <div className="nav">
            <p className="nav-link">About</p>
            <p className="nav-link">Approach</p>
            <p className="nav-link">Contact</p>
            <p className="nav-link">Clients
            </p>
          </div>
        </header>
      </div>
    );
  }
}
