import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Background from './components/layout/Background';
import Softdiv from './components/layout/Softdiv';
import './App.css';


function App() {
  const testBg = {
    width: "50rem",
    height: "50rem",
    position: "relative",
  }

  return (
    <>
      <Router>
        <div style={testBg}>
          <Background />
          <Header />
          <br></br>
          <br></br>
          <Softdiv text="button 1" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Softdiv text="button 2" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Softdiv text="button 3" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Softdiv text="button 4" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Softdiv text="button 5" />
        </div>
      </Router>
    </>
  );
}

export default App;
