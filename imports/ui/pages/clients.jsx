import React from 'react';
import GetInTouch from '../components/get-in-touch.jsx';

export default class Clients extends React.Component {
  componentWillMount() {
    DocHead.setTitle('Ben Israeli Private Tutoring - Clients');
    DocHead.addMeta({
      name: "description",
      content: "Clients of Ben Israeli can use the online calendar to add to or update their regular session times."
    });
  }
  componentDidMount() {
    window.addEventListener && window.addEventListener("message", function(event) {
      if (event.origin === "https://learnwithben.youcanbook.me") {
        document.getElementById("ycbmiframelearnwithben").style.height = event.data + "px";
      }
    }, false);
  }
  render () {
    return (
      <div className="row">
        <div className="col s12">
          <section className="clients">
            <iframe
              src="https://learnwithben.youcanbook.me/?noframe=true&skipHeaderFooter=true"
              id="ycbmiframelearnwithben"
              frameBorder="0"
              allowTransparency="true">
            </iframe>

            <GetInTouch/>
          </section>
        </div>
      </div>
    );
  }
}
