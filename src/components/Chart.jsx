import React, { Component } from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

// const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const Chart = () => {
    console.log(Map)
    const position = [50,50]
    return (
        <div>
        <Map 
            style={{ height: "480px", width: "100%" }}
            zoom={1}
            center={[-0.09, 51.505]} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      </div>
    );
};

export default Chart
