import React, { Component } from 'react';
import './App.css';
import CaruselSteps from "./components/CaruselSteps";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import LearnMore from "./components/LearnMore";
import CaruselTeachers from './components/CaruselTeachers';
import Footer from './components/Footer';
import VideoMainPage from './components/VideoMainPage';
import Map from './components/map/Map';
import Builder from './components/BuilderNew';

class App extends Component {
  render() {
    return (
      <div className="App">

       <Navbar />
       <Cover />
       <CaruselSteps />
        <LearnMore />
        <CaruselTeachers />
        <VideoMainPage />
        <Footer />
        {/* <Map /> */}
        <Builder />
      </div>
    );
  }
}

export default App;
