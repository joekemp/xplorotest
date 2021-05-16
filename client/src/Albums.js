import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Album from "./Album.js";

const Albums = (props) => {
  if (!props || !props.albums) {
    return <div>No results</div>
  }

  const albums = props.albums;
  const [sm, md, lg] = [12, 6, 4]; // this is set to make the page responsive (see bootstrap)
  const albumItems = albums.items.map(album => (
    <Col key={album.id} xs={sm} md={md} lg={lg} className="mb-4">
      <Album album={album} />
    </Col>
  ));

  return (
    <>
      <h3>Albums</h3>
      <Row>{albumItems}</Row>
    </>
  );
}

export default Albums;