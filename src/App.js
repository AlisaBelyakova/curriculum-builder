import React, { Component } from 'react';
import './App.css';
import CaruselSteps from "./CaruselSteps";
import Navbar from "./Navbar";
import Cover from "./Cover";
import ForWhom from "./ForWhom";
import CaruselTeachers from './CaruselTeachers';
import DesingLessonsButton from './DesingLessonsButton';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Cover />
       <CaruselSteps />
        <ForWhom />
        <CaruselTeachers />
      </div>
    );
  }
}

export default App;
