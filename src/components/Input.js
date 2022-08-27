import { React, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

import './Input.scss'

const Input = () => {

    const monthOptions = [
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'August' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' }
    ]

    const dayOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
        { value: '13', label: '13' },
        { value: '14', label: '14' },
        { value: '15', label: '15' },
        { value: '16', label: '16' },
        { value: '17', label: '17' },
        { value: '18', label: '18' },
        { value: '19', label: '19' },
        { value: '20', label: '20' },
        { value: '21', label: '21' },
        { value: '22', label: '22' },
        { value: '23', label: '23' },
        { value: '24', label: '24' },
        { value: '25', label: '25' },
        { value: '26', label: '26' },
        { value: '27', label: '27' },
        { value: '28', label: '28' },
        { value: '29', label: '29' },
        { value: '30', label: '30' },
        { value: '31', label: '31' }
    ]

    const [data, setData] = useState({ events: [{ description: "" }] })
    const [month, setMonth] = useState(0) // index for month
    const [day, setDay] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newURL = "https://byabbe.se/on-this-day/" + monthOptions[month].value + "/" + dayOptions[day].value + "/events.json"
        axios
            .get(newURL)
            .then(res => setData(res.data))
        console.log(newURL)
    }

    return (
        <div className='input'>
            <form className='form-layout' onSubmit={handleSubmit}>
                <label className='selector-label'> Month:
                    <Select
                        options={monthOptions}
                        defaultValue={monthOptions[0]}
                        className='month-selector'
                        onChange={(newObj) => setMonth(parseInt(newObj.value) - 1)}
                    />
                </label>

                <label className='selector-label'> Day:
                    <Select
                        options={dayOptions}
                        defaultValue={dayOptions[0]}
                        className='day-selector'
                        onChange={(newObj) => setDay(parseInt(newObj.value) - 1)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Input;