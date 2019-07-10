import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Chart from "./components/Chart";
import List from "./components/List";
import PropTypes from "prop-types";
import axios from "axios";
import Locations from "./components/Locations";

const header = { headers: { "user-key": "2a893b47faf5969d339ceb5f6797974d" } };

class App extends Component {
  state = {
    restaurants: [],
    locations: [],
    search: "London",
    currentCity: {
      id: 61,
      name: "London",
      latitude: 51.5074,
      longitude: -0.1278
    },
    displayButtons: false
  };
  render() {
    const {
      locations,
      restaurants,
      displayButtons,
      currentCity: { name, latitude, longitude }
    } = this.state;
    return (
      <div className="App">
        <Heading />
        <Form submitSearch={this.submitSearch} />
        <Locations
          locations={locations}
          chooseLocation={this.chooseLocation}
          displayButtons={displayButtons}
        />
        <Chart
          restaurants={restaurants}
          latitude={latitude}
          longitude={longitude}
          displayMap={displayButtons}
        />

        {/* <List
          restaurants={restaurants}
          displayButtons={displayButtons}
          name={name}
        /> */}
      </div>
    );
  }
  componentDidMount = async () => {
    const locations = await this.fetchLocations();
    const restaurants = await this.fetchRestaurants();
    this.setState({
      locations,
      restaurants
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.search !== prevState.search) {
      const locations = await this.fetchLocations();
      this.setState({ locations });
    }
    if (this.state.currentCity.name !== prevState.currentCity.name) {
      const restaurants = await this.fetchRestaurants();

      await this.setState(() => {
        return { restaurants };
      });

      this.setState(() => {
        const currentCity = { ...this.state.currentCity };
        currentCity.latitude = this.state.restaurants[0].restaurant.location.latitude;
        currentCity.longitude = this.state.restaurants[0].restaurant.location.longitude;
        return { currentCity };
      });
    }
  };
  fetchLocations = async () => {
    const { search } = this.state;
    const {
      data: { location_suggestions: locations }
    } = await axios.get(
      `https://developers.zomato.com/api/v2.1/cities?q=${search}`,
      header
    );
    return locations;
  };
  fetchRestaurants = async () => {
    const {
      currentCity: { id }
    } = this.state;
    const {
      data: { restaurants }
    } = await axios.get(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&start=0&count=100&sort=rating`,
      header
    );
    return restaurants;
  };
  chooseLocation = event => {
    event.preventDefault();

    this.setState({
      locations: [],
      currentCity: {
        id: event.target.id,
        name: event.target.innerText,
        latitude: 0,
        longitude: 0
      },
      displayButtons: false
    });
  };

  submitSearch = search => {
    this.setState({
      restaurants: [],
      search,
      displayButtons: true
    });
  };
}

App.propTypes = {
  restaurants: PropTypes.array,
  search: PropTypes.string
};

export default App;
