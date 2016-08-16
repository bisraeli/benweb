import { check, Match } from 'meteor/check';
import { Contact, CONTACT_SCHEMA } from './contact.js';

Meteor.methods({
  saveFormData: function (formData) { // this usually get called from the client
    // make sure data is good
    check(formData, CONTACT_SCHEMA);

    // save to database
    Contact.insert(formData);

    // Send a notification
    var text =
    `Name: ${formData.name}
     Phone: ${formData.phone}
     Email: ${formData.email}
     Message: ${formData.message}`;

    // async
    //console.log('Before email sending');
    Meteor.defer(function () {

      //console.log('we are sending the email now');
      // if it's async this meteor method gets completed before this is email Send
      // we avoid making the user wait for this to be done
      Email.send({
        to: "ben@benisraeli.nyc",
        from: "noreply@benisraeli.nyc",
        subject: "new client request",
        text: text
      });
      //console.log('email sending is done');
    });
    //console.log('after email sending');
  },
  //deleteContact: function (email, password) {
    // delete all documents that match that email (will delete multiple matches)
    //Contact.remove({ email: email });
  //}
});
