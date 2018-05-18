import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';

export default class AllBurritosView extends Component {
  render() {
    return (
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
    );
  }
}
