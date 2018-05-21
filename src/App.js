import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel.js';
import Carousel1 from './Carousel1.js';
import Footer from './Footer.js'
import Grid from './Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Carousel1 />
      <Grid />
      <Footer />
      </div>
    );
  }
}

export default App;
