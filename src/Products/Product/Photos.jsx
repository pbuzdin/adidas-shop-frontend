import React from 'react';
import styled from 'styled-components';

const Photos = styled.div`
  height: 120px;
  overflow: hidden;
`;
const PhotoSmall = styled.img`
  max-height: 120px;
  border: 5px solid transparent;
  cursor: pointer;
  border-color: ${props => (props.isActive ? '#e8e8ea' : 'transparent')};
`;

export default props => (
  <Photos>
    {props.photos.map((image, index) => (
      <PhotoSmall
        src={image.src}
        alt=""
        key={image.id}
        onClick={() => props.onClick(index)}
        isActive={index === props.photoIndex}
      />
    ))}
  </Photos>
);
