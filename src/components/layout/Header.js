import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="flex font-sans w-auto h-1/4 rounded-3xl my-5 mx-3 p-3 justify-center" style={headerStyle}>
            <h1 class="text-xl" >Components</h1>
        </header>
    )
}

const headerStyle = {
    color: "#4E67B1",
    boxShadow: ".3rem .3rem .6rem #212C4C, -.2rem -.2rem .5rem #4E67B1",
}

export default Header;