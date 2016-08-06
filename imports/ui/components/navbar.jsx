import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Header from './header.jsx';
import { toggleMobileMenu } from '../helpers/mobile-menu.js';

class Navbar extends React.Component {
  isActiveRouteName (routeName) {
    let { activeRouteName } = this.props;

    if (routeName.indexOf('|') !== -1) {
      var routes = routeName.split('|');
      if (_.indexOf(routes, activeRouteName) !== -1) {
        return 'active';
      }
    } else if (activeRouteName === routeName) {
      return 'active';
    }
  }

  render () {
    return (
      <div className="row custom navbar">
        <div className="col s10 m6">
          <a href="/" className="brand-logo">
            <h1>Ben Israeli</h1>
            <h2>Private Tutor &amp; Learning Specialist</h2>
          </a>
        </div>

        <div className="col s2 m6">
          <a onClick={ toggleMobileMenu } className="button-collapse right hide-on-large-only">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className={'nav-link ' + this.isActiveRouteName('home|about')}><a href="/about">About</a></li>
            <li className={'nav-link ' + this.isActiveRouteName('approach')}><a href="/approach">Approach</a></li>
            <li className={'nav-link ' + this.isActiveRouteName('contact')}><a href="/contact">Contact</a></li>
            <li className={'nav-link ' + this.isActiveRouteName('clients')}><a href="/clients">Clients</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar = createContainer(()=> {
  let activeRouteName = FlowRouter.getRouteName();

  return {
    activeRouteName
  };
}, Navbar);
