import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBar = styled.div`
  height: 75px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.defaultPrimaryColor};

  box-shadow: 0 2px 3px ${props => props.theme.shadowColor};
`;

const SearchInput = styled.input`
  height: 35px;
  width: 75%;
`;

export default class TopBarView extends Component {
  render() {
    return (
      <MenuBar>
        <SearchInput placeholder="Search burritos or restaurants..." />
      </MenuBar>
    );
  }
}
