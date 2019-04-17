import React, { Component } from 'react';
import './ForWhom.css';

class ForWhom extends Component {
  render() {
    return (
        <div id="for-whom">
        <span className="for-whom-item item-3">
          <a href="#" className="card card-a">
            <p id="p-1"> <span className="highlight">
              See lesson-plan templates and guidelines</span>
            </p>
          </a>
          <a href="#" className="card card-b">
            <p id="p-2"><span className="highlight">
              Learn more on benefits of VR for learning</span
            ></p>
          </a>
          <a href="#" className="card card-c">
            <p id="p-3"><span className="highlight">
              Learn more on teaching scenarios with multiple intelligences</span>
            </p>
          </a>
        </span>
          <span className="for-whom-item item-2">
            <span className="item-2-subitem">
              <p>Project-Based activities that are so important for learning are difficult & costly
              in real life – Immersive capabilities of VR can simulate real or imaginary
              circumstances at once, connecting students all over the world in acts of creation
              and sharing. </p>
            </span>
            <span className="item-2-subitem">
              <ul className="for-whom-list">
                <li className="for-whom-option" role="button">for corporations</li><br/>
                <li className="for-whom-option" role="button">for institutions</li><br/>
                <li className="for-whom-option" role="button">for instructors</li><br/>
              </ul>
            </span>
          </span>

          <span className="for-whom-item item-1">


            <video id="iframe" controls autoPlay poster="./images/carusel-steps/share-1.png"
            src="./images/video.mp4">
            {/* src="https://www.youtube.com/embed?v=Y0g4z-Dn27Y&autoplay=1&loop=1"> */}
            </video>
          </span>

        </div>
    );
  }
}

export default ForWhom;
