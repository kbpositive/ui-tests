import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';


function App() {
  const testBg = {
    width: "50rem",
    height: "50rem",
    background: '#2F3E6C',
    position: "relative",
  }
  const testButton = {
    width: "9rem",
    height: "3rem",
    margin: "0% 15%",
    color: "#4E67B1",
    fontFamily: "Arial",
    position: "absolute",
    top: "20%",
    marginTop: "-30px",
    borderRadius: "1rem",
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".3s ease",
    boxShadow: ".3rem .3rem .6rem #212C4C, -.2rem -.2rem .5rem #4E67B1",
  };
  return (
    <>
      <Router>
        <div style={testBg}>
          <Header />
          <br></br>
          <div style={testButton}>button</div>
          <br></br>
          <div style={testButton}>button</div>
        </div>
      </Router>
    </>
  );
}

export default App;
