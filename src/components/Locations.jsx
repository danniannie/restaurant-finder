import React from "react";
import PropTypes from "prop-types";

const Locations = ({ locations, chooseLocation, displayButtons }) => {
  if (!displayButtons) return <form className="search"/>;
  return (
    <section className="search">
        <h3 className="title">Pick a location:</h3>
        <form className="buttons">
        {locations.map(location => {
            return (
            <button className="button" key={location.id} id={location.id} onClick={chooseLocation}>
                {location.name}
            </button>
            );
        })}
        </form>
    </section>
  );
};

Locations.propTypes = {};

export default Locations;
