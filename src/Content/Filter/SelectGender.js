import React from 'react';

const FilterSelect = (props) => (
  <button className={props.className}>{props.children}</button>
)

export default () => (
  <div className="gender">
    <img src={require("./filter.svg")} className="filter-icon" alt="" />
    <div className="gender-switch">
      <FilterSelect className="active">Man</FilterSelect>
      <FilterSelect>Woman</FilterSelect>
    </div>
  </div>
)