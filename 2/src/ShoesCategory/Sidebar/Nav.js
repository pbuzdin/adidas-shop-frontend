import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';

const NavLink = (props) => (
  <a href={props.href} className="category">{props.children}</a>
)

export default () => (
  <div className="nav">
    <NavLink href="#">sports</NavLink>
    <div className="subnav">
      <NavLink href="#">shoes</NavLink>
      <NavLink href="#">clothing</NavLink>
      <NavLink href="#">accesories</NavLink>
    </div>
    <NavLink href="#">brands</NavLink>
    <NavLink href="#">micoach</NavLink>
  </div>
)