import React from 'react';
import styled from 'styled-components';

import ArrowDown from './img/arrow-down-icon.svg';

const Nav = styled.div`
  margin-top: 148px;
`;
const Category = styled.div`
  margin-bottom: 32px;
`;
const SubCategory = styled.div`

`;
const Link = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  text-align: center;
  font-family: 'AvenirNext', Arial;
  margin-bottom: 32px;
  font-weight: bold;
  color: #303030;
  margin-bottom: 32px;
  ${props => props.isSub && `
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    text-align: center;
    font-weight: bold;
    font-family: 'AndaleMono', Arial;
    margin-bottom: 26px;
  `}
  ${props => props.isMenu && `
    &::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 9px;
      margin-top: 10px;
      margin-left: 7px;
      background: url(${ArrowDown}) no-repeat;
    }
  `}
  color: ${props => (props.active ? '#fff' : '#3c3c3c')};
`;

export default () => (
  <Nav>
    <Category>
      <Link active isMenu>sports</Link>
      <SubCategory className="subnav">
        <Link isSub active>shoes</Link>
        <Link isSub>clothing</Link>
        <Link isSub>accesories</Link>
      </SubCategory>
    </Category>
    <Category><Link>brands</Link></Category>
    <Category><Link>micoach</Link></Category>
  </Nav>
);
