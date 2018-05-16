import React, { Component } from 'react';
import { getRestaurants, getBurritos } from './DashboardActions';

export default class DashboardView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRestaurants());
    dispatch(getBurritos());
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {this.props.restaurants.map((restaurant, i) => {
              return (
                <tr key={i}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.address}</td>
                  <td>{restaurant.hours}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
