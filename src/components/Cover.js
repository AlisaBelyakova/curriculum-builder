import React, { Component } from 'react';
import '../styles/Cover.css';

class Cover extends Component {
  render() {
    return (
        <div id="first">
          <span id="circle-title">
          {/* <span id="circle"></span> */}
          <p>Gamification <br/> EdTech</p>
        </span>
          <span className="first-item first-item-a">
            <p className="title-text-around">
            for corporations, schools, colleges and individual instructors</p>
            <p className="header-text-title">
              Create & publish immersive learning programs without coding
              <br/>
              <br/>Challenge students to collaborate on projects inside VR
            </p>
            <p className="title-text-around">use your own equipment or visit our
              certified VR portals near you…</p>
          </span>
          <span className="first-item first-item-b">
            <div className="we-do-title">What we do:</div>
            <div className="what-we-do">
                <p>✔️Provide easy to use curriculum building tools and templates</p>
                <p>✔️Provide VR headset at the certified location near you</p>
                <p>✔️Promote your programs and lesson plans internationally</p>
                <p>✔️Arrange student sessions and feedback loops</p>
                <p>✔️Provide user performance data for recommendations on learning trajectories</p>
            </div>
          </span>
        </div>
    );
  }
}

export default Cover;
