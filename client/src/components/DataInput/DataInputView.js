import React, { Component } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Dropzone from 'react-dropzone';
import { Grid } from 'react-flexbox-grid';

dotenv.load();

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class DataInputView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],

      restaurant: {
        name: '',
        address: '',
        hours: {
          sun: '',
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
        },
        images: [],
      },

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

    this.handleRestaurantInputChange = this.handleRestaurantInputChange.bind(this);
    this.sendRestaurantPost = this.sendRestaurantPost.bind(this);

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    this.setState({
      files,
    });
  }

  handleRestaurantInputChange(e, key) {
    const { restaurant } = this.state;
    const name = e.target.name;
    const value = e.target.value;

    name === 'sun' ||
    name === 'mon' ||
    name === 'tue' ||
    name === 'wed' ||
    name === 'thu' ||
    name === 'fri' ||
    name === 'sat'
      ? this.setState({
          restaurant: {
            ...restaurant,
            hours: {
              ...restaurant.hours,
              [name]: value,
            },
          },
        })
      : this.setState({
          restaurant: {
            ...restaurant,
            [name]: value,
          },
        });
  }

  sendRestaurantPost() {
    const newRestaurantObj = {
      name: this.state.restaurant.name,
      address: this.state.restaurant.address,
      hours: this.state.restaurant.hours,
      images: this.state.restaurant.images,
    };

    axios
      .post(`${SERVER_URL}api/restaurants`, newRestaurantObj)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => console.log(err));

    this.setState({
      restaurant: {
        name: '',
        address: '',
        hours: {
          sun: '',
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
        },
        images: [],
      },
    });
  }

  sendBurritoPost() {
    const newBurritoObj = {
      name: this.state.burrito.name,
      cost: this.state.burrito.cost,
      ingredients: this.state.burrito.ingredients,
      description: this.state.burrito.description,
      images: this.state.burrito.images,
      vegetarian: this.state.burrito.vegetarian,
      recommended: this.state.burrito.recommended,
      tags: this.state.burrito.tags,
      rating: this.state.burrito.rating,
      restaurant: this.state.burrito.restaurant,
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
  }

  render() {
    return (
      <Grid>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.restaurant.name}
            placeholder="Restaurant name..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="address"
            value={this.state.restaurant.address}
            placeholder="Restaurant address..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="sun"
            value={this.state.restaurant.hours.sun}
            placeholder="Sunday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="mon"
            value={this.state.restaurant.hours.mon}
            placeholder="Monday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="tue"
            value={this.state.restaurant.hours.tue}
            placeholder="Tuesday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="wed"
            value={this.state.restaurant.hours.wed}
            placeholder="Wednesday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="thu"
            value={this.state.restaurant.hours.thu}
            placeholder="Thursday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="fri"
            value={this.state.restaurant.hours.fri}
            placeholder="Friday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="sat"
            value={this.state.restaurant.hours.sat}
            placeholder="Saturday hours..."
            onChange={this.handleRestaurantInputChange}
          />
          <input
            type="text"
            name="images"
            value={this.state.restaurant.images}
            placeholder="Restaurant images..."
            onChange={this.handleRestaurantInputChange}
          />
        </form>
        <Dropzone onDrop={this.onDrop} />
        <button onClick={this.sendRestaurantPost}>Send Restaurant</button>
      </Grid>
    );
  }
}
