import React from 'react';

function Softdiv(props) {
    return (
        <div style={divStyle}>
            <h1>{props.text}</h1>
        </div>
    )
}

const divStyle = {
    width: "9rem",
    height: "3rem",
    margin: "0% 2%",
    color: "#4E67B1",
    fontFamily: "Arial",
    fontSize: "8px",
    position: "absolute",
    borderRadius: "10rem",
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".3s ease",
    boxShadow: ".3rem .3rem .6rem #212C4C, -.2rem -.2rem .5rem #4E67B1",
};


export default Softdiv;