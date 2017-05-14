import React from 'react';
import styled from 'styled-components';

const SelectGender = styled.div`
  margin-left: 30px;
  display: inline-block;
`;
const Btn = styled.button`
  font-family: 'AvenirNext', Arial;
  font-size: 24px;
  color: #d6d6d6;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  padding: 14px 7px;
  cursor: pointer;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
`;

export default () => (
  <SelectGender>
    <Btn isActive>Man</Btn>
    <Btn>Woman</Btn>
  </SelectGender>
);
