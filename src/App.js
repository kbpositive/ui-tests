import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Button from "./components/layout/CustomButtonComponent";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <h1>Colorful Custom Button Components</h1>
        <Button
          border="none"
          color="pink"
          height="200px"
          onClick={() => alert("You clicked on the pink circle!")}
          radius="50%"
          width="200px"
          children="I'm a pink circle!"
        />
        <br></br>
        <br></br>

        <Button
          border="dotted"
          color="#f5bc42"
          height="200px"
          onClick={() => console.log("You clicked on the orange circle!")}
          radius="50%"
          width="200px"
          children="I'm an orange circle!"
        />
        <br></br>
        <br></br>
        <Button
          border="dashed"
          color="#fdffc4"
          height="200px"
          onClick={() => console.log("You clicked on the yellow square!")}
          radius="10%"
          width="200px"
          children="I'm a yellow square!"
        /></Router>
    </>
  );
}

export default App;
