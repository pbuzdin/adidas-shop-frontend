import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Category from './Category';

const Sports = styled.div`
  margin-top: 148px;
`;

const Link = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  text-align: center;
  font-family: 'AndaleMono', Arial;
  margin-bottom: 26px;
  color: #3c3c3c;
  &.active {
    color: #fff;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.openCategory = this.openCategory.bind(this);
  }

  openCategory() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <div>
        <Sports>
          <Category title="Football">
            <Link to="/products/football/shoes">Shoes</Link>
            <Link to="/products/football/clothing">Clothing</Link>
            <Link to="/products/football/accesories">Accesories</Link>
          </Category>
          <Category title="Running">
            <Link to="/products/running/shoes">Shoes</Link>
            <Link to="/products/running/clothing">Clothing</Link>
            <Link to="/products/running/accesories">Accesories</Link>
          </Category>
          <Category title="Basketball">
            <Link to="/products/basketball/shoes">Shoes</Link>
            <Link to="/products/basketball/clothing">Clothing</Link>
            <Link to="/products/basketball/accesories">Accesories</Link>
          </Category>
        </Sports>
      </div>
    );
  }
}

export default Nav;
