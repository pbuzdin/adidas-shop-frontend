import React from 'react';

const FilterSelect = (props) => (
  <button>{props.children}</button>
)

export default () => {
  return (
    <div className="gender">
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
    </div >
  );
}