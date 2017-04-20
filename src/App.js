import React, { Component } from 'react';

// https://github.com/kevgathuku/react-bootstrap-jquery/blob/master/src/index.js
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = $;
require('bootstrap');

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="./">Hello You</a>
            </div>
          </div>
        </nav>

        <div className="main">
          <div className="container">
            <div className="input-group col-xs-4 col-xs-offset-4">
              <input className="form-control" type="text" placeholder="Your Name"/>
              <div className="input-group-btn">
                <button className="btn">Hello</button>
              </div>
            </div>
            <div>
              <h1>Hello You!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
