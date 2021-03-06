import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import TopBarView from '../TopBar/TopBarView';

export default class AllBurritosView extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBarView />
        <Grid>
          <h1>Burritos</h1>
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
