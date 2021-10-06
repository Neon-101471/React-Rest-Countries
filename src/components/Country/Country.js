import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, region, population, flag} = props.country;
    return (
        <div className="country">
            <h3>{name}</h3>
            <img src={flag} alt="" />
            <p>Capital: {capital}</p>
            <p className="text-secondary"><small>Population: {population}</small></p>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;