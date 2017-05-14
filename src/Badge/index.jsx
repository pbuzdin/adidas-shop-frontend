import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  background: #ff5c5c;
  font-family: 'AvenirNext', Arial;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  padding: 6px 20px;
  position: absolute;
`;
export default () => <Badge className="sale-badge">sale</Badge>;
