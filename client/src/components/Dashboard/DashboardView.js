import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { getRestaurants, getBurritos } from './DashboardActions';
import DashboardInput from '../DataInput/DataInputView';

export default class DashboardView extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getRestaurants());
    dispatch(getBurritos());
  }

  render() {
    return (
      <Grid>
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
        <DashboardInput />
      </Grid>
    );
  }
}
