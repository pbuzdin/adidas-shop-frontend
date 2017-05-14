import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const Sidebar = styled.div`
  background: #0e0e0e;
  color: #FFF;
  max-width: 370px;
  float: left;
  width: 100%;
  min-height: 1167px;
  padding: 31px 22px;
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Nav />
  </Sidebar>
);
