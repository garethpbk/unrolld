import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBar = styled.div`
  height: 75px;
  width: 100%;

  background-color: ${props => props.theme.defaultPrimaryColor};
`;

export default class TopBarView extends Component {
  render() {
    return <MenuBar />;
  }
}
