import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Track from "./Track.js";

const Tracks = (props) => {
  if (!props || !props.tracks || !props.tracks.total) {
    return <div>Could not find any results.</div>
  }

  const tracks = props.tracks;
  const [sm, md, lg] = [12, 6, 4]; // this is set to make the page responsive (see bootstrap)
  const trackItems = tracks.items.map(track => (
    <Col key={track.id} xs={sm} md={md} lg={lg} className="mb-4">
      <Track track={track} />
    </Col>
  ));

  return (
    <>
      <h3>Tracks</h3>
      <Row>{trackItems}</Row>
    </>
  );
}

export default Tracks;