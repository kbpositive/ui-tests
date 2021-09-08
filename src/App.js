import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Background from './components/layout/Background';
import Softdiv from './components/layout/Softdiv';
import './App.css';


function App() {
  return (
    <>
      <div class="w-screen h-screen overflow-hidden min-h-screen bg-gradient-to-tl from-custom-blue-tue to-custom-blue">
        <Router>
          <div>
            <br></br>
            <Header />
            <br></br>
            <Softdiv text="button 1" />
            <br></br>
            <Softdiv text="button 2" />
            <br></br>
            <Softdiv text="button 3" />
            <br></br>
            <Softdiv text="button 4" />
            <br></br>
            <Softdiv text="button 5" />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
