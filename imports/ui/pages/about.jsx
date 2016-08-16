import React from 'react';
import GetInTouch from '../components/get-in-touch.jsx';

export default class About extends React.Component {
  componentWillMount() {
    DocHead.setTitle('Ben Israeli Private Tutoring - About');
    DocHead.addMeta({
      name: "description",
      content: "Ben Israeli offers a 360° tutoring solution to enhance quantitative and language skills for great test prep results and year-round academic success."
    });
  }

  render () {
    return (
      <div className="row about">
        <div className="col s12">
          <div className="content-image">
            <img className="left" src="/img/photofinal.jpg"/>
          </div>
          <div className="content-text-large">
            Ben Israeli offers a 360° tutoring solution to enhance quantitative and language skills for great test prep results and year-round academic success.
          </div>
          <p className="content-text">
            Ben provides high school math (algebra, geometry, precalculus, calculus, statistics), biology (SAT II and AP), chemistry (SAT II and AP), Spanish (SAT II), and SAT, ACT, and SAT II Subject Tests tutoring. He also teaches Exeter Math. Every session is one-to-one with Ben.
            <span className="hide-on-med-and-down">
              &nbsp; Ben fully customizes his teaching style to his student’s learning style. Ben only takes on a limited number of students per year and families make a commitment to working with Ben at his office, at home, or online. Students will receive various licenses to learning websites, which Ben uses to manage student-progress outside of session.
            </span>
          </p>
          <p className="content-text hide-on-large-only">
            Ben fully customizes his teaching style to his student’s learning style. Ben only takes on a limited number of students per year and families make a commitment to working with Ben at his office, at home, or online. Students will receive various licenses to learning websites, which Ben uses to manage student-progress outside of session.
          </p>
          <GetInTouch/>
        </div>
      </div>
    );
  }
}
