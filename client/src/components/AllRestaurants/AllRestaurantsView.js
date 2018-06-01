import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import { ContainedButton } from '../Styled/Button';
import Spinner from '../Styled/Spinner';
import TopBarView from '../TopBar/TopBarView';

export default class AllRestaurantsView extends Component {
  state = {
    max: 20,
  };

  drawRestaurants = (restaurants, max) => {
    if (!restaurants.length) {
      return <Spinner />;
    }
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
    !this.props.restaurants.length
      ? ''
      : this.setState({
          max: this.state.max + 20,
        });
  };

  render() {
    return (
      <React.Fragment>
        <TopBarView type="Restaurants" searchData={this.props.restaurants} />
        <Grid style={{ textAlign: 'center' }}>
          <h1>Restaurants</h1>
          <Row>{this.drawRestaurants(this.props.restaurants, this.state.max)}</Row>
          <ContainedButton onClick={this.loadMoreRestaurants}>Load More</ContainedButton>
        </Grid>
      </React.Fragment>
    );
  }
}
