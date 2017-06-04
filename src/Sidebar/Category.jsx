import React, { Component } from 'react';
import styled from 'styled-components';

import ArrowDown from './img/arrow-down-icon.svg';

const SubCategory = styled.div`
  margin-bottom: 50px;
`;

const CategoryItem = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  text-align: center;
  font-family: 'AvenirNext', Arial;
  color: #fff;
  margin-bottom: 32px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 9px;
    margin-top: 10px;
    margin-left: 7px;
    background: url(${ArrowDown}) no-repeat;
    ${props => props.isActive && `
      transform: rotate(-180deg);
    `}
  }
`;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <div>
        <CategoryItem isActive={this.state.isOpened} onClick={this.handleClick}>
          {this.props.title}
        </CategoryItem>
        {this.state.isOpened &&
          <SubCategory>{this.props.children}</SubCategory>}
      </div>
    );
  }
}

export default Category;
