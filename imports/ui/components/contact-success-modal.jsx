import React from 'react';

const ContactSuccessModal = ()=> (
  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4 style={{textAlign:'center'}}>Success</h4>
      <p>Thank you for submiting your contact information.
        I will be in touch with you within the next 24 hours to set up a call
        so that we can discuss your needs and what a potential learning
        arrangment might look like.
      </p>
      <p style={{textAlign:'center'}}>
        <i className="material-icons dp48" style={{fontSize: '10rem'}}>done</i>
      </p>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
);

export default ContactSuccessModal;
