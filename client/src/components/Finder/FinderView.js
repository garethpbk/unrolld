import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import TopBarView from '../TopBar/TopBarView';

const CenteredH2 = styled.h2`
  margin: 25px auto;

  text-align: center;
`;

const Card = styled.div`
  height: 150px;

  background-color: #e8e8e8;

  margin: 15px;
`;

export default class FinderView extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBarView />
        <Grid>
          <CenteredH2>
            <em>Trending Burritos</em>
          </CenteredH2>
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
          <CenteredH2>
            <em>Trending Restaurants</em>
          </CenteredH2>
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
