import React, { Component } from 'react';
import './VideoMainPage.css';

class VideoMainPage extends Component {
  componentDidMount () {
    const videoBig = window.document.getElementById("video-main");
    videoBig.controls = "false";
  }

  render() {
    return (
      <div id="video-main">
        <div className="embed-responsive embed-responsive-16by9">
            <video id="video-main" className="embed-responsive-item" src="./images/video.mp4"
            allowFullScreen autoPlay="autoplay" loop></video>
        </div>
      </div>
    );
  }
}

export default VideoMainPage;
