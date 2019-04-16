import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {
  render() {
    return (
        <div id="first">
          <span className="first-item first-item-a">
            <p className="header-text-title">Unlock the power of immersive presence and become virtually connected to millions of students 🌍</p>
          </span>
          <span className="first-item first-item-b">
            <p className="section-title">What we do:</p>
            <p>Provide easy to use curriculum building tools and templates.
              Provide VR headset at the certified location near you. 
              Promote your programs and lesson plans internationally.
            </p>
          </span>
        </div>
    );
  }
}

export default Cover;
