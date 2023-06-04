import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'

const Form = () => {
    const [formState, setFormState] = useState({
        oneway: false,
        airline: "Aegean Airlines",
        source: "Abu Dhabi",
        destination: "Abu Dhabi",
        date: ""
    });
    const [airlines, setAirlines] = useState(['Airline'])
    const [sources, setSources] = useState(['Source'])
    const [destinations, setDestinations] = useState(['Destination'])
    const [errors, setErrors] = useState('')

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        console.log(name);
        console.log(value);


        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://flight-price-prediction-backend.onrender.com/api/v1/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });
            const predictionResult = await response.json();

            if(predictionResult.status === 200) {
                navigate("/predictions", { state: { formData: predictionResult } });
            } else {
                setErrors(predictionResult.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
            fetch('https://flight-price-prediction-backend.onrender.com/api/v1/airlines')
                .then(response => response.json())
                .then(data => {
                    setAirlines(data.airlines.flat())
                    setDestinations(data.destinations.flat())
                    setSources(data.destinations.flat())
                })
    }, []);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="one-way">
                <input
                    type="checkbox"
                    name="oneway"
                    checked={formState.oneway}
                    onChange={handleChange}
                /> One Way
            </label>

            <div className="inputs">
                <select 
                    name='airline'
                    value={formState.airline}
                    onChange={handleChange}
                    required
                >
                    {
                        airlines.map((airline) => (<option value={airline}>{airline}</option>))
                    }
                </select>

                <select 
                    name='source'
                    value={formState.source}
                    onChange={handleChange}
                >
                    {
                        sources.map((source) => (<option value={source}>{source}</option>))
                    }
                </select>

                <select 
                    name='destination'
                    value={formState.destination}
                    onChange={handleChange}
                >
                    {
                        destinations.map((destination) => (<option value={destination}>{destination}</option>))
                    }
                </select>

                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="btn" type="submit">Predict</button>
            
            <br />

            { errors && <p style={{color: 'red', fontWeight: 300}}>* {errors}</p> }
        </form>
    );
};

export default Form;
