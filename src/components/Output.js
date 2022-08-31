import { React, useState, useEffect } from 'react';

import './Output.scss'

const Input = ({ data }) => {

    const [elem, setElem] = useState(0)


    useEffect(() => {
        setElem(Math.floor(Math.random() * data.events.length))
    }, [data])

    console.log(data.events.length)
    console.log(elem)
    console.log(data)


    return (
        <div className="output">
            {elem < data.events.length && data.date ?
                <div>
                    <div className="date-year"> {data.date}, {data.events[elem].year} </div>
                    <div> {data.events[elem].description} </div>
                </div> : null}
        </div>);
}

export default Input;