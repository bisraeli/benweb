import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import App from '../../ui/layout/app.jsx';
import Home from '../../ui/pages/home.jsx';
import About from '../../ui/pages/about.jsx';
import Approach from '../../ui/pages/approach.jsx';
import Contact from '../../ui/pages/contact.jsx';
import Clients from '../../ui/pages/clients.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      main: <About/>,
    });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(App, {
      main: <About/>
    });
  }
});

FlowRouter.route('/approach', {
  name: 'approach',
  action() {
    mount(App, {
      main: <Approach/>
    });
  }
});

FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    mount(App, {
      main: <Contact/>
    });
  }
});

FlowRouter.route('/clients', {
  name: 'clients',
  action() {
    mount(App, {
      main: <Clients/>
    });
  }
});
