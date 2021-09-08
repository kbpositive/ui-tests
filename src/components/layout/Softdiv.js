import React from 'react';

function Softdiv(props) {
    return (
        <div class="cursor-pointer mix-blend-overlay bg-gray-500 bg-opacity-50 flex shadow-outter font-sans w-40 h-1/4 rounded-3xl mx-3 p-3 justify-center">
            <h1 class="mix-blend-overlay text-gray-300">{props.text}</h1>
        </div>
    )
}

export default Softdiv;