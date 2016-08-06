import React from 'react';
import { toggleMobileMenu } from '../helpers/mobile-menu.js';

const MobileNavbar = () => (
  <nav id="body-nav">
    <a onClick={ toggleMobileMenu } className="button-collapse right">
      <i className="material-icons">menu</i>
    </a>
    <ul>
      <li><a onClick={ toggleMobileMenu } href="/about"><span className="border">About</span></a></li>
      <li><a onClick={ toggleMobileMenu } href="/approach"><span className="border">Approach</span></a></li>
      <li><a onClick={ toggleMobileMenu } href="/contact"><span className="border">Contact</span></a></li>
      <li><a onClick={ toggleMobileMenu } href="/clients"><span className="border">Clients</span></a></li>
    </ul>
  </nav>
);

export default MobileNavbar;
