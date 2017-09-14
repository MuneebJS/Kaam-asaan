import React, { Component } from 'react';
import logo from './logo.svg';
import {StyleRoot} from 'radium';
import './App.css';
import store from './store/index';
import {Provider} from 'react-redux';
import Routes from './Router';
import * as firebase from 'firebase';
require('./index.css');

var config = {
  apiKey: "AIzaSyB7quv44Lowo2B8X9q3jo96A0vzw3cTP-8",
  authDomain: "mankadard7737.firebaseapp.com",
  databaseURL: "https://mankadard7737.firebaseio.com",
  projectId: "mankadard7737",
  storageBucket: "mankadard7737.appspot.com",
  messagingSenderId: "1041159335676"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <StyleRoot >
        <Routes />
      </StyleRoot>
      </Provider>
    );
  }
}

export default App;
