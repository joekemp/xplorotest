import React from "react";
import Card from 'react-bootstrap/Card';

export const CardImage = (props) => {
  const item = props.item;
  let src;
  if (!item ||
      !item.images ||
      item.images.length < 2 ||
      !item.images[1].url) {
    src = "no-image.png"
  } else {
    src = item.images[1].url;
  }

  return (
    <Card.Img variant="top" src={src} />
  );
};

export default CardImage;