import React from 'react';
import { CONTACT_SCHEMA } from '../../api/contact/contact.js';

export default class Contact extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: [],
    };
  }

  handleChange(prop, e) {
    let value = e.target.value;
    let newState = {};
    newState[prop] = value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    // reset errors state
    this.setState({ errors: [] });
    // validate data here with simple schema
    let formData = this.state;
    delete formData.errors;
    let context = CONTACT_SCHEMA.newContext();
    let isValid = context.validate(formData);

    // form data is valid submit to server
    if (isValid) {
      // disable button to avoud multiple contancts being sent
      $('.submit-button').attr('disabled', true);
      Meteor.call('saveFormData', formData, (err, res)=> {
        // restore button
        $('.submit-button').attr('disabled', false);
        if (err) {
          // handle error
        } else {
          // successfull form submit from server show modal
          $('#modal1').openModal({
            ready: function() {
              FlowRouter.go('/approach');
            }, // Callback for Modal open
          });
        }
      });
    } else { // the form data is wrong display error messages
      let errors = context.invalidKeys();
      errors = _.map(errors, function (o) {
        return context.keyErrorMessage(o.name);
      });
      if (errors) {
        console.log(errors);
        this.setState({ errors: errors });
      }
    }
  }

  render () {
    return (
      <div className="row">
        <div className="col s12">
          <section className="contact">

            <div className="row" style={{marginBottom: '3rem'}}>
              <form onSubmit={ this.handleSubmit.bind(this) } className="col s12">
                <div className="row">
                  <div className="col s12 m6">
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                          value={ this.state.name }
                          onChange={ this.handleChange.bind(this, 'name') }
                          placeholder="Name"
                          id="name"
                          type="text"
                          className="validate"
                          required
                        />
                        <label className="active" htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">email</i>
                        <input
                          value={ this.state.email }
                          onChange={ this.handleChange.bind(this, 'email') }
                          placeholder="Email"
                          id="Email"
                          type="email"
                          className="validate"
                          required
                        />
                        <label className="active" htmlFor="name">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">phone</i>
                        <input
                          value={ this.state.phone }
                          onChange={ this.handleChange.bind(this, 'phone') }
                          placeholder="Phone Number"
                          id="phoneNumber"
                          type="tel"
                          className="validate"
                          required
                        />
                        <label className="active" htmlFor="phoneNumber">Phone Number</label>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m6">
                    <div className="row">
                      <div className="input-field col s12 regular-textarea">
                        <p>What do you expect to get from your educational support?</p>
                        <textarea
                          placeholder="What do you expect to get from your educational support?"
                          name="message"
                          value={ this.state.message }
                          onChange={ this.handleChange.bind(this, 'message') }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                { this.state.errors.length ? (
                    <div className="errors">
                      <p style={{color:'#F44336'}}>{this.state.errors.join(',')}</p>
                    </div>
                ) : null }
                <button className="btn waves-effect waves-light submit-button right" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>

            <div className="intrinsic-container intrinsic-container-16x9 intrinsic-container-4x3">
              <iframe
                style={{border: 0}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmXqoAqhew5CgVd4NPaNGlh4eitYDwTZo&q=315+W+36th+St+New York,+NY+10018"
                allowFullScreen>
              </iframe>
            </div>

          </section>
        </div>
      </div>
    );
  }
}
