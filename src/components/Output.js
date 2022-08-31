import React from 'react';

import './Output.scss'

const Input = ({ data, elem }) => {
    return (
        <div className="output">
            {data.date && <div>
                <div className="date-year"> {data.date}, {data.events[elem].year} </div>
                <div>  {data.events[elem].description} </div>
            </div>}
        </div >);
}

export default Input;