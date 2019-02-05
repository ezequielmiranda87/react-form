import React, { Component } from 'react';
import Login from './login/containers/login'

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header col-md-12">
          <h1>React form app</h1>
        </header>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 content">
            <Login/>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
