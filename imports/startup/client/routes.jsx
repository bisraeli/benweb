import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Home from '../../ui/pages/home.jsx';
import About from '../../ui/pages/about.jsx';
import Approach from '../../ui/pages/approach.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Home);
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(About);
  }
});

FlowRouter.route('/approach', {
  name: 'approach',
  action() {
    mount(Approach);
  }
});
