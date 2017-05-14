import React from 'react';
import styled from 'styled-components';

const Gender = styled.div`
  & img {
    background: #ebebeb;
    padding: 11px 7.5px;
    float: left;
    width: 55px;
  }
`;
const SelectGender = styled.div`
  margin-bottom: 36px;
  margin-left: 84px;
`;
const FilterSelect = styled.button`
  font-family: 'AvenirNext', Arial;
  font-size: 24px;
  color: #d6d6d6;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  padding: 14px 7px;
  cursor: pointer;
  color: ${props => (props.active ? '#4d42f8' : '#d6d6d6')};
`;

export default () => (
  <Gender>
    <img src={require('./filter.svg')} alt="" />
    <SelectGender>
      <FilterSelect active>Man</FilterSelect>
      <FilterSelect>Woman</FilterSelect>
    </SelectGender>
  </Gender>
);
