import React, { Component } from 'react';
import './CaruselSteps.css';

class CaruselSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      autoclick: true
    }
    this.currentSlide = this.currentSlide.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  componentDidMount (){
    this.showSlides(1);
    var nextClickInt = setInterval(() => {
      document.getElementsByClassName("next")[0].click();
    }, 2800);
  }

  // Next and previous controls
  plusSlides(n) {

    if (n < 0) this.setState({ slideIndex: this.state.slideIndex - 1})
    else this.setState({ slideIndex: this.state.slideIndex + 1})

    this.showSlides(this.state.slideIndex);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.setState({ slideIndex: n})
    this.showSlides(this.state.slideIndex);
  }

  showSlides(n) {
    var slides = window.document.getElementsByClassName("mySlides");
    var dots = window.document.getElementsByClassName("dot");

    if (n === slides.length) { this.setState({ slideIndex: 1}) }
    if (n < 1) { this.setState({ slideIndex: slides.length}) }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace("dot active", "dot")
    }

    slides[this.state.slideIndex-1].style.display = "block";
    dots[this.state.slideIndex-1].className.replace("dot", "dot active")
  }

  render() {
    return (
      <div>
        <div className="mySlides carusel-container">
              <p className="carusel-number">1</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/create-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/create-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">Prepare lesson plan in VR with our easy to use templates.</p>
                </span>
              </div>
          </div>
        <div className="mySlides carusel-container">
              <p className="carusel-number">2</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/conduct-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/conduct-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">Conduct live sessions or publish pre-recorded VR instructions.</p>
                </span>
              </div>
          </div>

          <div className="mySlides carusel-container">
              <p className="carusel-number">3</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/feedback-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/feedback-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">Assess the work, give a feedback and approve. </p>
                </span>
              </div>
          </div>

          <div className="mySlides carusel-container">
              <p className="carusel-number">4</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/share-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/share-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">Students can share and explore each others work.</p>
                </span>
              </div>
          </div>


            <a className="prev" onClick={(e) => this.plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={(e) => this.plusSlides(1)}>&#10095;</a>
            <div className="dots">
                <span className="dot active" onClick={(e) => this.currentSlide(1)}></span>
                <span className="dot" onClick={(e) => this.currentSlide(2)}></span>
                <span className="dot" onClick={(e) => this.currentSlide(3)}></span>
                <span className="dot" onClick={(e) => this.currentSlide(4)}></span>
            </div>
      </div>
    );
  }
}

export default CaruselSteps;
