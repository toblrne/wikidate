import React from 'react';

import './Output.scss'

const Input = ({ data }) => {

    const randomElement = Math.floor(Math.random() * data.events.length)

    return (
        <div className="output">
            {data.events[randomElement].description}
        </div>);
}

export default Input;