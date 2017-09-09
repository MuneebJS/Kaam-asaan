import React, { Component } from 'react';
import logo from './logo.svg';
import {StyleRoot} from 'radium';
import './App.css';
import HeaderNav from './components/HeaderNav'
import  HomePageCarouse from './components/Carousel'
import  FeaturedServices from './components/featuredServices/FeaturedServices'
import  Renovation from './components/renovation/Renovation';
import Footer from './components/Footer'
require('./index.css')
// import Button from './components/Button'

class App extends Component {
  render() {
    return (
     <StyleRoot>
          <HeaderNav />
          <HomePageCarouse />
          <FeaturedServices />
          <Renovation />
          <Footer />
      </StyleRoot>
    );
  }
}

export default App;
