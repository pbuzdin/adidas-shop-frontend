import React from 'react';
import styled from 'styled-components';

const SelectSize = styled.div`
  display: inline-block;
  margin-left: 50px;
`;
const Label = styled.span`
  font-family: 'AvenirNext', Arial;
  font-size: 24px;
  color: #4d42f8;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  padding: 14px 7px;
  float: left;
  margin-right: 18px;
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
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
`;

export default () => (
  <SelectSize>
    <Label>size</Label>
    <FilterSelect>36</FilterSelect>
    <FilterSelect>37</FilterSelect>
    <FilterSelect>38</FilterSelect>
    <FilterSelect>39</FilterSelect>
    <FilterSelect>40</FilterSelect>
    <FilterSelect isActive>41</FilterSelect>
    <FilterSelect>42</FilterSelect>
  </SelectSize>
);
