import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Button from "./components/layout/CustomButtonComponent";
import './App.css';


function App() {
  const testBg = {}
  const testButton = {
    width: "15rem",
    height: "4rem",
    borderRadius: "1rem",
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".3s ease",
    boxShadow: ".3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem #FFFFFF"
  };
  return (
    <>
      <Router>
        <Header />
        <br></br>
        <div style={testBg}>
          <div style={testButton}>button</div>
        </div>
      </Router>
    </>
  );
}

export default App;
