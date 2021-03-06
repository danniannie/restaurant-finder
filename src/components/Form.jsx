import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    currentSearch: ""
  };

  render() {
    return (
      <section className="search" >
        <p className="text">Please enter the city in which you'd like to find a restaurant.</p>
        <form className="searchBox">
          <input 
            type="text"
            onChange={this.handleChange}
            placeholder="Location..."
            value={this.state.currentSearch}
          />
          <button onClick={this.handleSubmit} type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitSearch(this.state.currentSearch);
    this.setState({ currentSearch: "" });
  };

  handleChange = event => {
    this.setState({ currentSearch: event.target.value });
  };
}

Form.propTypes = {};

export default Form;
