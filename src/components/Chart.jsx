import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const Chart = ({ restaurants, longitude, latitude }) => {
  return (
    <div className="map">
      <Map
        style={{ height: "100%", width: "100%" }}
        zoom={12}
        center={[latitude, longitude]}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurants.map(({ restaurant }) => {
          const {
            name,
            id,
            cuisines,
            user_rating: { aggregate_rating }
          } = restaurant;
          const { longitude, latitude } = restaurant.location;
          return (
            <Marker key={id} position={[latitude, longitude]}>
              <Popup key={id}>
                {name}
                <br />
                Rating: {aggregate_rating}
                <br />
                Cuisines: {cuisines}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default Chart;
