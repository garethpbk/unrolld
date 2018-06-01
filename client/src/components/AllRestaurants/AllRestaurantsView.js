import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import TopBarView from '../TopBar/TopBarView';

export default class AllRestaurantsView extends Component {
  state = {
    max: 20,
  };

  drawRestaurants = (restaurants, max) => {
    return restaurants.slice(0, max).map((restaurant, index) => {
      return (
        <Col key={`${restaurant.name}-${index}`} xs={6}>
          <Link to={`/restaurant/${restaurant._id}`}>
            <Card>
              <p>{restaurant.name}</p>
              <p>{restaurant.address}</p>
            </Card>
          </Link>
        </Col>
      );
    });
  };

  loadMoreRestaurants = () => {
    this.setState({
      max: this.state.max + 20,
    });
  };

  render() {
    return (
      <React.Fragment>
        <TopBarView type="Restaurants" />
        <Grid>
          <h1>Restaurants</h1>
          <Row>{this.drawRestaurants(this.props.restaurants, this.state.max)}</Row>
          <button onClick={this.loadMoreRestaurants}>Load More</button>
        </Grid>
      </React.Fragment>
    );
  }
}
