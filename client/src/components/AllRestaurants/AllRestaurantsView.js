import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import TopBarView from '../TopBar/TopBarView';

export default class AllRestaurantsView extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBarView type="Restaurants" />
        <Grid>
          <h1>Restaurants</h1>
          <Row>
            {this.props.restaurants.map((restaurant, index) => {
              return (
                <Col key={`${restaurant.name}-${index}`} xs={6}>
                  <Card>
                    <p>{restaurant.name}</p>
                    <p>{restaurant.address}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
