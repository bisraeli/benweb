import React from 'react';

export default class Contact extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s12">
          <section className="contact">

            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="col s12 m6">
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">account_circle</i>
                        <input placeholder="Name" id="name" type="text" className="validate"/>
                        <label className="active" htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">email</i>
                        <input placeholder="Email" id="Email" type="text" className="validate"/>
                        <label className="active" htmlFor="name">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m11">
                        <i className="material-icons prefix">phone</i>
                        <input placeholder="Phone Number" id="phoneNumber" type="text" className="validate"/>
                        <label className="active" htmlFor="phoneNumber">Phone Number</label>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m6">
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea id="message" className="materialize-textarea"></textarea>
                        <label className="active" htmlFor="message">What do you expect to get from your educational support?</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>

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
