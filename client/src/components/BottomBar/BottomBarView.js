import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBottomBar = styled.div`
  height: 75px;
  width: 100%;

  background-color: ${props => props.theme.defaultPrimaryColor};
  position: fixed;
  bottom: 0;
`;

export default class BottomBarView extends Component {
  render() {
    return <MenuBottomBar />;
  }
}
