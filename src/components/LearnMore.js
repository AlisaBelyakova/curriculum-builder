import React, { Component } from 'react';
import '../styles/LearnMore.css';

class LearnMore extends Component {
  render() {
    return (
        <div id="learn-more">
        <span className="learn-more-item item-3">
          <a href="#" className="card card-a">
            <p id="p-1"> <span className="highlight">
              Lesson-plan templates and guidelines</span>
            </p>
          </a>
          <a href="#" className="card card-b">
            <p id="p-2"><span className="highlight">
              Step-by-step tutorial for basic training </span>
            </p>
          </a>
          <a href="#" className="card card-c">
            <p id="p-3"><span className="highlight">
              Teaching scenarios with multiple intelligences</span>
            </p>
          </a>
        </span>


          <span className="learn-more-item item-1">


            <video id="iframe" controls poster="./images/carusel-steps/share-1.png"
             src="./images/video.mp4">
            {/* src="https://www.youtube.com/embed?v=Y0g4z-Dn27Y&autoplay=1&loop=1"> */}
            </video>
          </span>

        </div>
    );
  }
}

export default LearnMore;
