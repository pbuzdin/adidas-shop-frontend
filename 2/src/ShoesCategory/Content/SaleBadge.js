import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';

const SaleBadge = (props) => (
  <span className="sale-badge">{props.children}</span>
)

export default () => {
  return (
    <SaleBadge>sale</SaleBadge>
  );
}
