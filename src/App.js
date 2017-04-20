import React, { Component } from 'react';

// https://github.com/kevgathuku/react-bootstrap-jquery/blob/master/src/index.js
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = $;
require('bootstrap');

import HelloYou from './HelloYou';
import './App.css';

const Navbar = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="./">{props.title}</a>
      </div>
    </div>
  </nav>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar title="Hello You" />

        <div className="main">
          <HelloYou />
        </div>
      </div>
    );
  }

}

export default App;
