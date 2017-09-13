import React, { Component } from 'react';
import logo from './logo.svg';
import {StyleRoot} from 'radium';
import './App.css';
// import HeaderNav from './components/HeaderNav'
// import  HomePageCarouse from './components/Carousel'
// import  FeaturedServices from './components/featuredServices/FeaturedServices'
// import  Renovation from './components/renovation/Renovation';
// import Footer from './components/Footer'
import Routes from './Router'
require('./index.css')


class App extends Component {
  render() {
    return (
     <StyleRoot>
        <Routes />
      </StyleRoot>
    );
  }
}

export default App;
