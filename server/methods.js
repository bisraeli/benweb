import { check, Match } from 'meteor/check';
import { FormSubmits } from './main.js';

const FORM_DATA = {
  name: String,
  email: String,
  phone: String,
  message: Match.Maybe(String),
};

Meteor.methods({
  'saveFormData'(formData) {
    // make sure data is good
    check(formData, FORM_DATA);

    // save to database
    FormSubmits.insert(formData);
  }
});
