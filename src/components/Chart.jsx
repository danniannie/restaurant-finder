import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const Chart = ({ restaurants, longitude, latitude, displayMap }) => {
  return (
    <div>
      <Map
        style={{ height: "480px", width: "80%" }}
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
