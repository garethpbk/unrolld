import React, { Component } from 'react';
import axios from 'axios';

export default class DataInputView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      hours: '',
      images: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendRestaurantPost = this.sendRestaurantPost.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  sendRestaurantPost() {
    const newRestaurantObj = {
      name: this.state.name,
      address: this.state.address,
      hours: this.state.hours,
      images: this.state.images,
    };

    axios
      .post('http://localhost:6969/api/restaurants', newRestaurantObj)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => console.log(err));

    this.setState({ name: '', address: '', hours: '', images: [] });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Restaurant name..."
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="address"
            value={this.state.address}
            placeholder="Restaurant address..."
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="hours"
            value={this.state.hours}
            placeholder="Restaurant hours..."
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="images"
            value={this.state.images}
            placeholder="Restaurant images..."
            onChange={this.handleInputChange}
          />
        </form>
        <button onClick={this.sendRestaurantPost}>Send Restaurant</button>
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>
        <p>{this.state.hours}</p>
        <p>{this.state.images}</p>
      </div>
    );
  }
}
