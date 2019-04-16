import React, { Component } from 'react';
import './CaruselTeachers.css';

class CaruselTeachers extends Component {
  render() {
    return (
        <div id="cumpus-cards">
          <span>
            <p className="section-title">Recently published @ Univirtual Campus:</p>
          </span>
          <span className="cards-container">
            <img src="./images/teachers-cards/card1.jpg" className="teacher-card-img card-1" />
            <img src="./images/teachers-cards/card2.jpg" className="teacher-card-img card-2" />
            <img src="./images/teachers-cards/card3.jpg" className="teacher-card-img card-3" />
            <img src="./images/teachers-cards/card4.jpg" className="teacher-card-img card-4" />
            <br/>
            <img src="./images/teachers-cards/card5.jpg" className="teacher-card-img card-5" />
            <img src="./images/teachers-cards/card6.jpg" className="teacher-card-img card-6" />
            <img src="./images/teachers-cards/card7.jpg" className="teacher-card-img card-7" />
          </span>
        </div>
    );
  }
}

export default CaruselTeachers;
