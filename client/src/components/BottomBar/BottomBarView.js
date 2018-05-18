import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

const MenuBottomBar = styled.div`
  height: 75px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.defaultPrimaryColor};
  box-shadow: 0 -2px 3px ${props => props.theme.dividerColor};

  position: fixed;
  bottom: 0;
`;

const NavIcon = styled.span`
  height: 55px;
  width: 55px;
  margin: 0 25px;

  //background-color: ${props => props.theme.accentColor};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

  display: inline-block;
`;

export default class BottomBarView extends Component {
  render() {
    return (
      <MenuBottomBar>
        <Grid>
          <Row center="xs">
            <Link to="/">
              <NavIcon className="search" />
            </Link>
            <Link to="/dashboard">
              <NavIcon className="account" />
            </Link>
            <Link to="/burritos">
              <NavIcon className="burrito" />
            </Link>
            <Link to="/restaurants">
              <NavIcon className="restaurant" />
            </Link>
          </Row>
        </Grid>
      </MenuBottomBar>
    );
  }
}
