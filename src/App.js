import React, {Component} from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Chart from './components/Chart';
import List from './components/List';
import PropTypes from 'prop-types';
import axios from 'axios'
import Locations from './components/Locations';

const header = {headers: { 'user-key': '2a893b47faf5969d339ceb5f6797974d'}}

class App extends Component {
  state= {
    restaurants: [],
    locations: [],
    search: 'London',
    currentCity: 61
  }
  render() {
    const { locations } = this.state
    return (
      <div className="App">
      <Heading />
      <Form />
      <Chart />
      <Locations locations={locations} chooseLocation={this.chooseLocation}/>
      <List />
    </div>
    );
  }
  componentDidMount = async () => {
    const locations = await this.fetchLocations()
    const restaurants = await this.fetchRestaurants()
    this.setState({
      locations,
      restaurants
    })
  }
  fetchLocations = async () => {
    const { search } = this.state;
    const { data: { location_suggestions: locations } } = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${search}`, header)
    return locations
  }
  fetchRestaurants = async () => {
    const { currentCity } = this.state
    const { data: restaurants } = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${currentCity}&entity_type=city&start=0&count=100`, header)
    return restaurants
  }
  chooseLocation = (event) => {
    event.preventDefault()
    console.log(event.target)
    this.setState({
      currentCity: event.target.id
    })
  }
}

App.propTypes = { 
  restaurants: PropTypes.array,
  search: PropTypes.string
};

export default App;

