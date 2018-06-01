import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const SearchMatches = styled.ul`
  width: 100%;

  position: absolute;

  background-color: white;

  list-style-type: none;

  margin: 0 0 10px 0;
  padding: 0;

  > li {
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid ${props => props.theme.dividerColor};
  }
`;

export default class TopBarView extends Component {
  state = {
    query: '',
    searchMatches: [],
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
    this.filterSearchData(this.state.query);
  };

  filterSearchData = query => {
    if (this.state.query.length <= 1) {
      return this.setState({ searchMatches: [] });
    }
    this.setState({
      searchMatches: this.props.searchData
        .filter(datum => datum.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 10),
    });
  };

  render() {
    return (
      <React.Fragment>
        <MenuBar>
          <SearchForm>
            <SearchContainer>
              <SearchInput placeholder={`Search ${this.props.type}s...`} onChange={this.handleChange} />
            </SearchContainer>
          </SearchForm>
        </MenuBar>
        <SearchMatches>
          {this.state.searchMatches.map(match => {
            return (
              <li key={match._id}>
                <Link to={`/${this.props.type}/${match._id}`} key={match._id}>
                  {match.name}
                </Link>
                <span style={{ float: 'right' }}>{(match.distance * 0.000621371192).toFixed(2)} mi</span>
              </li>
            );
          })}
        </SearchMatches>
      </React.Fragment>
    );
  }
}
