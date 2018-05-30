import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import TopBarView from '../TopBar/TopBarView';

const CoverImage = styled.div`
  height: 160px;
  width: 100%;

  background-color: aquamarine;
`;

export default class RestaurantView extends Component {
  loadRestaurant(restaurant) {
    if (!restaurant) {
      return <h1>Loading...</h1>;
    }

    return (
      <Grid>
        <CoverImage />
        <h1>{restaurant.name}</h1>
        <Row>
          <Col xs={6}>
            <p>{restaurant.locality}</p>
          </Col>
          <Col xs={6}>
            <p>{restaurant.address}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
  render() {
    const { id } = this.props.match.params;
    const restaurant = this.props.restaurants[this.props.restaurants.findIndex(restaurant => restaurant._id === id)];

    return (
      <React.Fragment>
        <TopBarView type="Restaurants" />
        {this.loadRestaurant(restaurant)}
      </React.Fragment>
    );
  }
}
