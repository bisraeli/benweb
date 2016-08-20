import React from 'react';
import GetInTouch from '../components/get-in-touch.jsx';

export default class Appraoch extends React.Component {
  componentWillMount() {
    DocHead.setTitle('Ben Israeli Private Tutoring - Approach');
    DocHead.addMeta({
      name: "description",
      content: "Ben Israeli offers a 360° tutoring solution to enhance quantitative and language skills for great test prep results and year-round academic success."
    });
  }
  render () {
    return (
      <div className="row approach">
        <div className="col s12">
          <section className="content">
            <p className="content-text">
              Ben approaches education from many angles,
              structuring sessions to advance the student on a learning track tailored
              to his/her learning needs. Key to his teaching philosophy is soliciting the student’s
              active, consistent engagement in the learning process. The goal is each
              student’s management of his/her learning.
            </p>

            <blockquote>
              “What is extremely gratifying to me is organizing content
              for my students that accelerates their learning. Taking into account each student’s
              unique profile helps determine which exercises will make our sessions most dynamic and
              impactful, while allowing us to maximize the probability of a successful learning outcome.
              When students engage in a way that helps them understand what learning can feel like, then
              my job is done.”
            </blockquote>

            <p className="content-text">
              Ben's background in teaching students with different learning styles means that he customizes
              even his test prep to each student's needs. One size does not fit all.
            </p>


            <p className="content-text">
              Mr. Israeli offers regular session hours, as well as weekend and online
              appointments.
            </p>

            <p className="content-text" style={{ marginBottom: '3rem'}}>
              Ben Israeli graduated from New York University in 2009 with a degree in Economics and
              English &amp; American Literature. He has been a full-time tutor since 2010.
            </p>

            <GetInTouch/>
          </section>
        </div>
      </div>
    );
  }
}
