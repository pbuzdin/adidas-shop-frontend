import React from 'react';
import './style.css';

const FilterSelect = (props) => (
  <button>{props.children}</button>
)

export default () => {
  return (
    <div className="filter row">
      <div className="gender col4">
        <img src={require("./img/filter.svg")} className="filter-icon" alt="" />
        <div className="gender-switch">
          <FilterSelect>Man</FilterSelect>
          <FilterSelect>Woman</FilterSelect>
        </div>
      </div>
      <div className="sizes col8">
        <span className="size-title">size</span>
        <div className="size-line">
          <FilterSelect>36</FilterSelect>
          <FilterSelect>37</FilterSelect>
          <FilterSelect>38</FilterSelect>
          <FilterSelect>39</FilterSelect>
          <FilterSelect>40</FilterSelect>
          <FilterSelect>41</FilterSelect>
          <FilterSelect>42</FilterSelect>
        </div>
      </div>
    </div>
  );
}