import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBar = styled.div`
  height: 75px;
  width: 100%;
  position: relative;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.defaultPrimaryColor};

  box-shadow: 0 2px 3px ${props => props.theme.shadowColor};
`;

const SearchForm = styled.form`
  width: 75%;
`;

const SearchContainer = styled.div`
  height: 48px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 10px;
`;

const SearchInput = styled.input`
  height: 35px;
  width: 80%;
  display: inline-block;
  border: 0;

  &:active,
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.span`
  height: 35px;
  width: 35px;

  display: flex;
  align-items: center;
  margin: 0 0 0 25px;
  color: ${props => props.theme.darkPrimaryColor};
`;

export default class TopBarView extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
    this.filterSearchData(this.state.query);
  };

  filterSearchData = query => {
    console.log(this.props.searchData.filter(datum => datum.name.toLowerCase().includes(query.toLowerCase())));
  };

  render() {
    return (
      <MenuBar>
        <SearchForm>
          <SearchContainer>
            <SearchInput placeholder={`Search ${this.props.type}...`} onChange={this.handleChange} />
            <SearchButton>@</SearchButton>
          </SearchContainer>
        </SearchForm>
        {this.state.query}
      </MenuBar>
    );
  }
}
