import React from 'react';
import './Country.css';



const Country = (props) => {
    const { flags, name, area, region, population } = props.country;

    return (
        <div className='country'>
            <img className='mb-4' src={flags.png}></img>
            <h2>{name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>

    );



};



export default Country;