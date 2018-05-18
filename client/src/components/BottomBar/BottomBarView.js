import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBottomBar = styled.div`
  height: 75px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.defaultPrimaryColor};
  position: fixed;
  bottom: 0;
`;

const NavIcon = styled.span`
  height: 40px;
  width: 40px;
  margin: 0 25px;

  background-color: ${props => props.theme.accentColor};
  border-radius: 50%;

  display: inline-block;
`;

export default class BottomBarView extends Component {
  render() {
    return (
      <MenuBottomBar>
        <Link to="/">
          <NavIcon />
        </Link>
        <Link to="/dashboard">
          <NavIcon />
        </Link>
        <Link to="/burritos">
          <NavIcon />
        </Link>
        <Link to="/restaurants">
          <NavIcon />
        </Link>
      </MenuBottomBar>
    );
  }
}
