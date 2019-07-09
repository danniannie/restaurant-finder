import React from 'react';
import PropTypes from 'prop-types';

const Locations = ({ locations }) => {
    return (
        <ul>
            {locations.map(location => {
                return (<li key={location.id}>{location.name}</li>)
            })}
        </ul>
    );
};

Locations.propTypes = {
    
};

export default Locations;