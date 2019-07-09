import React from "react";
import PropTypes from "prop-types";

const Locations = ({ locations, chooseLocation, displayButtons }) => {
  if (!displayButtons) return <form />;
  return (
    <form>
      <h3>Pick a location:</h3>
      {locations.map(location => {
        return (
          <button key={location.id} id={location.id} onClick={chooseLocation}>
            {location.name}
          </button>
        );
      })}
    </form>
  );
};

Locations.propTypes = {};

export default Locations;
