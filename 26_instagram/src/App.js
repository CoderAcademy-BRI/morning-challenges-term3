// Instagram

// This is a fresh create-react-app. Some Instagram data has been added
// for you - `instagramPhotos` is an array of photo details.

// 1. Take a look at data.js so you know what properties are available.
// 2. Use the data to build an instagram feed. Display image, title & likes.

// Beast mode:
// 1. Some images have geolocation details. Use the react-google-maps react plugin
//    to display a map under these images.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import instagramPhotos from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
