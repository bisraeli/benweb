import React from 'react';
import GetInTouch from '../components/get-in-touch.jsx';

export default class Clients extends React.Component {
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
