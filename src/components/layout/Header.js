import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Components</h1>
        </header>
    )
}

const headerStyle = {
    width: "auto",
    height: "10%",
    color: "#4E67B1",
    fontFamily: "Arial",
    marginTop: "20px",
    borderRadius: "1rem",
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".3s ease",
    boxShadow: ".3rem .3rem .6rem #212C4C, -.2rem -.2rem .5rem #4E67B1",
}

export default Header;