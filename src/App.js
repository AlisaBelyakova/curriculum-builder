import React, { Component } from 'react';
import './App.css';
import CaruselSteps from "./CaruselSteps";
import Navbar from "./Navbar";
import Cover from "./Cover";
import LearnMore from "./LearnMore";
import CaruselTeachers from './CaruselTeachers';
import Footer from './Footer';
import VideoMainPage from './VideoMainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Cover />
       <CaruselSteps />
        <LearnMore />
        <VideoMainPage />
        <CaruselTeachers />
        <Footer />
      </div>
    );
  }
}

export default App;
