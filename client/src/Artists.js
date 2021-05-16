import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Artist from "./Artist.js";

const Artists = (props) => {
  if (!props || !props.artists || !props.artists.total) {
    return <div>Could not find any results.</div>
  }

  console.log(`Artists: ${JSON.stringify(props.artists, null, 2)}`);

  const artists = props.artists;
  const [sm, md, lg] = [12, 6, 4]; // this is set to make the page responsive (see bootstrap)
  const artistItems = artists.items.map(artist => (
    <Col key={artist.id} xs={sm} md={md} lg={lg} className="mb-4">
      <Artist artist={artist} />
    </Col>
  ));

  return (
    <>
      <h3>Artists</h3>
      <Row>{artistItems}</Row>
    </>
  );
}

export default Artists;