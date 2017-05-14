import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  width: 94px;
  height: 94px;
  margin: 0 auto;
`;

export default () => (
  <Logo>
    <img src={require('./img/logo.svg')} alt="" />
  </Logo>
);
