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
  <SelectSize>
    <Label>size</Label>
    <Btn>36</Btn>
    <Btn>37</Btn>
    <Btn>38</Btn>
    <Btn>39</Btn>
    <Btn>40</Btn>
    <Btn isActive>41</Btn>
    <Btn>42</Btn>
  </SelectSize>
);
