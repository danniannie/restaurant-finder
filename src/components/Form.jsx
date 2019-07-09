import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    currentSearch: ""
  };

  render() {
    return (
      <section>
        <p>Please enter the city in which you'd like to find a restaurant.</p>
        <form>
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
    this.setState({ search: "" });
  };

  handleChange = event => {
    this.setState({ currentSearch: event.target.value });
  };
}

Form.propTypes = {};

export default Form;
