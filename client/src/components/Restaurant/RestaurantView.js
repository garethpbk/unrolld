import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import TopBarView from '../TopBar/TopBarView';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const CoverImage = styled.div`
  height: 160px;
  width: 100%;

  background-color: aquamarine;
`;

export default class RestaurantView extends Component {
  state = {
    ownedBurritos: [],
  };

  setBurritos = restaurant => {
    if (this.state.ownedBurritos.length > 0) {
      return;
    }
    const returnedBurritos = [];
    restaurant._burritos.map(burrito => {
      return axios.get(`${SERVER_URL}/api/burritos/${burrito}`).then(res => {
        returnedBurritos.push(res.data);
        this.setState({ ownedBurritos: returnedBurritos });
      });
    });
  };

  loadRestaurant = restaurant => {
    if (!restaurant) {
      return <h1>Loading...</h1>;
    }

    this.setBurritos(restaurant);

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
        <h3>Burritos</h3>
        <Row>
          {this.state.ownedBurritos.map(burrito => {
            return (
              <Col key={burrito.name} xs={6}>
                <Card>
                  <p>{burrito.name}</p>
                  <p>${burrito.cost}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  };
  render() {
    const { id } = this.props.match.params;
    const restaurant = this.props.restaurants[this.props.restaurants.findIndex(restaurant => restaurant._id === id)];

    return (
      <React.Fragment>
        <TopBarView type="restaurant" searchData={this.props.restaurants} />
        {this.loadRestaurant(restaurant)}
      </React.Fragment>
    );
  }
}
