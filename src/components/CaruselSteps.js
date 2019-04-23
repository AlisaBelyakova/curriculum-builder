import React, { Component } from 'react';
import '../styles/CaruselSteps.css';

class CaruselSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      pagination: 0,
      autoclick: false,
      dotsIndexClass: ["dot active", "dot", "dot", "dot"],
      slidesIndexClass: [
        "mySlides carusel-container",
        "mySlides carusel-container",
        "mySlides carusel-container",
        "mySlides carusel-container"
      ]

    }
    this.currentSlide = this.currentSlide.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.showSlides = this.showSlides.bind(this);
    this.updatePaginationOnResize = this.updatePaginationOnResize.bind(this);
    this.slideLeft =  this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  async componentDidMount() {
    this.showSlides(0);
    window.onresize = () => this.updatePaginationOnResize();

    // set auto sliding
    await this.setState({autoclick: setInterval(() => {
      // this.currentSlide(this.state.activeIndex-1);
      // this.showSlides(this.state.activeIndex);
    }, 2000)});
  }

  updatePaginationOnResize() {
    console.log("residew")
    const slides = window.document.getElementsByClassName("carusel-container");
    const parentsWidth = slides[0].parentElement.getBoundingClientRect().width;
    for (let i = 0; i< slides.length; i++) {
      const slide = slides[i];
      slide.style.left = `${this.state.pagination * parentsWidth}px`;
    }
  }

  async slideLeft() {
    const slides = window.document.getElementsByClassName("carusel-container");
    const parentsWidth = slides[0].parentElement.getBoundingClientRect().width;
    await this.setState({pagination: this.state.pagination - 1});
    if (this.state.pagination < -3) {
      await this.setState({pagination: 0});
    }

    for (let i = 0; i< slides.length; i++) {
      const slide = slides[i];
      slide.style.left = `${this.state.pagination * parentsWidth}px`;
    }
  }

  async slideRight () {
    const slides = window.document.getElementsByClassName("carusel-container");
    const parentsWidth = slides[0].parentElement.getBoundingClientRect().width;
    await this.setState({pagination: this.state.pagination + 1});
    if (this.state.pagination > 0) {
      await this.setState({pagination: -3});
    }

    for (let i = 0; i< slides.length; i++) {
      const slide = slides[i];
      slide.style.left = `${this.state.pagination*parentsWidth}px`;
    }
  }

  // Next and previous controls
  async plusSlides(direction) {
    clearInterval(this.state.autoclick);
    if (direction < 0) {
      await this.setState({ activeIndex: this.state.activeIndex - 1});
      this.slideRight();
    }
    else {
      await this.setState({ activeIndex: this.state.activeIndex + 1});
      this.slideLeft();
    }
    this.showSlides(this.state.activeIndex);
  }

  // Thumbnail image controls
  async currentSlide(n) {
    await this.setState({ activeIndex: (-1)*n});
    this.showSlides((-1)*n);

    const slides = window.document.getElementsByClassName("carusel-container");
    const parentsWidth = slides[0].parentElement.getBoundingClientRect().width;

    await this.setState({pagination: n});
    for (let i = 0; i< slides.length; i++) {
      const slide = slides[i];
      slide.style.left = `${this.state.pagination*parentsWidth}px`;
    }
  }

  async showSlides(n) {
    var slides = window.document.getElementsByClassName("mySlides");

    //reset activeIndex if on the edge
    if (n === slides.length) { await this.setState({ activeIndex: 0}) }
    if (n < 0) { await this.setState({ activeIndex: slides.length-1}) }

    //reset dots classes
    let updateClassesForDots = ["dot", "dot", "dot", "dot"];
    updateClassesForDots.splice(this.state.activeIndex, 1, "dot active");
    await this.setState({dotsIndexClass:  updateClassesForDots});
  }

  render() {
    return (
      <div id="steps">
        <div className={this.state.slidesIndexClass[0]}>
              <p className="carusel-number">1</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/create-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/create-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">
                    Prepare projects and record instructions inside VR
                  </p>
                </span>
              </div>
          </div>
        <div className={this.state.slidesIndexClass[1]}>
              <p className="carusel-number">2</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/conduct-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/conduct-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">
                    Teach live on-demand or students follow recorded instructions by themselves
                    <br/> <br/> with live streaming for mobile
                    <img src="./images/carusel-steps/conduct-3.png" className="mobile-conduct"/>
                  </p>
                </span>
              </div>
          </div>

          <div className={this.state.slidesIndexClass[2]}>
              <p className="carusel-number">3</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/feedback-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/feedback-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">
                    Provide feedback and approve student content for sharing
                  </p>
                </span>
              </div>
          </div>

          <div className={this.state.slidesIndexClass[3]}>
              <p className="carusel-number">4</p>
              <div className="carusel-flex-section">
                <span className="carusel-flex-item stripe">
                  <img src="./images/carusel-steps/share-1.png" className="flex-img"/>
                  <img src="./images/carusel-steps/share-2.png" className="flex-img"/>
                </span>
                <span className="carusel-flex-item">
                  <p className="flex-text">
                  Participants can <br/> share content
                  <img src="./images/carusel-steps/share.png" className="share"/>
                    <br/>
                    <br/>VR experience
                    <br/> Mobile game
                    <br/> YouTube story
                  </p>
                </span>
              </div>
          </div>

          <span className="slide-controllers">
            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
            <div className="dots">
                <span className={this.state.dotsIndexClass[0]} onClick={() => this.currentSlide(0)}></span>
                <span className={this.state.dotsIndexClass[1]} onClick={() => this.currentSlide(-1)}></span>
                <span className={this.state.dotsIndexClass[2]} onClick={() => this.currentSlide(-2)}></span>
                <span className={this.state.dotsIndexClass[3]} onClick={() => this.currentSlide(-3)}></span>
            </div>
            </span>
      </div>
    );
  }
}

export default CaruselSteps;
