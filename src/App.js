import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
