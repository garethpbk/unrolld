import React, { Component } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Dropzone from 'react-dropzone';
import { Grid } from 'react-flexbox-grid';

dotenv.load();

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class AdminView extends Component {
  state = {
    burrito: {
      name: '',
      cost: 0,
      ingredients: [],
      description: '',
      images: [],
      vegetarian: false,
      recommended: false,
      tags: [],
      rating: {
        heft: 0,
        taste: 0,
        salsa: 0,
        value: 0,
      },
      restaurant: '',
    },
  };

  handleBurritoInputChange = e => {
    const { burrito } = this.state;
    const name = e.target.name;
    const value = e.target.value;

    name === 'heft' || name === 'taste' || name === 'salsa' || name === 'value'
      ? this.setState({
          burrito: {
            ...burrito,
            rating: {
              ...burrito.rating,
              [name]: value,
            },
          },
        })
      : this.setState({
          burrito: {
            ...burrito,
            [name]: value,
          },
        });
  };

  sendBurritoPost = () => {
    const newBurritoObj = {
      ...this.state.burrito,
    };

    axios
      .post('http://localhost:6969/api/burritos', newBurritoObj)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => console.log(err));

    this.setState({
      burrito: {
        name: '',
        cost: 0,
        ingredients: [],
        description: '',
        images: [],
        vegetarian: false,
        recommended: false,
        tags: [],
        rating: {
          heft: 0,
          taste: 0,
          salsa: 0,
          value: 0,
        },
        restaurant: '',
      },
    });
  };

  render() {
    return (
      <Grid>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.burrito.name}
            placeholder="Burrito name..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="cost"
            value={this.state.burrito.cost}
            placeholder="Burrito cost..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="ingredients"
            value={this.state.burrito.ingredients}
            placeholder="Burrito ingredients..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="description"
            value={this.state.burrito.description}
            placeholder="Burrito description..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="vegetarian"
            value={this.state.burrito.vegetarian}
            placeholder="Burrito vegetarian?"
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="recommended"
            value={this.state.burrito.recommended}
            placeholder="Burrito recommended?"
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="tags"
            value={this.state.burrito.tags}
            placeholder="Burrito tags..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="heft"
            value={this.state.burrito.rating.heft}
            placeholder="Burrito heft..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="taste"
            value={this.state.burrito.rating.taste}
            placeholder="Burrito taste..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="salsa"
            value={this.state.burrito.rating.salsa}
            placeholder="Burrito salsas..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="value"
            value={this.state.burrito.rating.value}
            placeholder="Burrito value..."
            onChange={this.handleBurritoInputChange}
          />
          <input
            type="text"
            name="restaurant"
            value={this.state.burrito.restaurant}
            placeholder="Burrito restaurant id..."
            onChange={this.handleBurritoInputChange}
          />
        </form>
        <Dropzone onDrop={this.onDrop} />
        <button onClick={this.sendBurritoPost}>Send Burrito</button>
      </Grid>
    );
  }
}
