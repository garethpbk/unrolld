import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';

export default class AllRestaurantsView extends Component {
  render() {
    return (
      <Grid>
        <h1>Restaurants</h1>
        <Row>
          {this.props.restaurants.map(restaurant => {
            return (
              <Col xs={6}>
                <Card>
                  <p>{restaurant.name}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}
