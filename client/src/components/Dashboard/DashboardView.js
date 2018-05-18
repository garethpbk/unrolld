import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '../Styled/Card';
import DashboardInput from '../DataInput/DataInputView';

const CoverImage = styled.div`
  height: 160px;
  width: 100%;

  background-color: peru;

  position: relative;
`;

const UserImage = styled.div`
  height: 150px;
  width: 150px;

  background-color: tomato;

  border: 3px solid white;
  border-radius: 50%;

  position: absolute;

  top: 80px;
  left: 25px;
`;

const UserInfo = styled.div`
  height: 80px;
  width: 100%;

  position: relative;
  right: 50px;

  text-align: right;

  > p:first-of-type {
    font-weight: 800;
  }
`;

export default class DashboardView extends Component {
  render() {
    return (
      <Grid>
        <CoverImage />
        <UserImage />
        <UserInfo>
          <p>Dog Bone</p>
          <p>San Diego, CA</p>
        </UserInfo>

        <h2>Fav Burritos</h2>
        <Row>
          <Col xs={6}>
            <Card />
          </Col>
          <Col xs={6}>
            <Card />
          </Col>
        </Row>

        <h2>Fav Restaurants</h2>
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
