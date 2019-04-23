import React, { Component } from 'react';
import '../styles/CaruselTeachers.css';

class CaruselTeachers extends Component {
  render() {
    return (
        <div id="cumpus-cards">
          <span className="for-whom">
            <span className="for-whom-subitem">
              <p>  Project-Based group activities that are so important for learning
                are impossible or costly in real life – imagine going to the Moon and back..,
                learning English in a role-play with Queen Elizabeth, or assembling
                a turbo engine together with the engineers at the Boeing factory in Seattle.
                Immersive capabilities of VR shorten the distance between the concept
                and its application, simulating real or imaginary circumstances at will.</p>
            </span>
            <span className="for-whom-subitem">
              <ul className="for-whom-list">
                <li className="for-whom-btn" role="button">for corporations</li><br/>
                <li className="for-whom-btn" role="button">for institutions</li><br/>
                <li className="for-whom-btn" role="button">for instructors</li><br/>
              </ul>
            </span>
          </span>

          <span className="cards-container">
            <span>
              <p className="univirtual-title">Recently published @ UnivirtualClass.com</p>
            </span>
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

// return (
//   <div id="cumpus-cards">
//     <span className="for-whom">
//       <span className="for-whom-subitem">
//         <p>Project-Based activities that are so important for learning are difficult & costly
//         in real life – Immersive capabilities of VR can simulate real or imaginary
//         circumstances at once, connecting students all over the world in acts of creation
//         and sharing. </p>
//       </span>
//       <span className="for-whom-subitem">
//         <ul className="for-whom-list">
//           <li className="for-whom-btn" role="button">for corporations</li><br/>
//           <li className="for-whom-btn" role="button">for institutions</li><br/>
//           <li className="for-whom-btn" role="button">for instructors</li><br/>
//         </ul>
//       </span>
//     </span>

//     <span className="cards-container">
//       <span>
//         <p className="section-title">Recently published @ Univirtual Class:</p>
//       </span>
//       <img src="./images/teachers-cards/card1.jpg" className="teacher-card-img card-1" />
//       <img src="./images/teachers-cards/card2.jpg" className="teacher-card-img card-2" />
//       <img src="./images/teachers-cards/card3.jpg" className="teacher-card-img card-3" />
//       <img src="./images/teachers-cards/card4.jpg" className="teacher-card-img card-4" />
//       <br/>
//       <img src="./images/teachers-cards/card5.jpg" className="teacher-card-img card-5" />
//       <img src="./images/teachers-cards/card6.jpg" className="teacher-card-img card-6" />
//       <img src="./images/teachers-cards/card7.jpg" className="teacher-card-img card-7" />
//     </span>
//   </div>
// );

