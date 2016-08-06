import { check, Match } from 'meteor/check';
import { Contact, CONTACT_SCHEMA } from './contact.js';

Meteor.methods({
  'saveFormData'(formData) {
    // make sure data is good
    check(formData, CONTACT_SCHEMA);

    // save to database
    Contact.insert(formData);
  }
});
