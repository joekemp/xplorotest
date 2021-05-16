import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Album from "./Album.js";

export const Albums = (props) => {
  const [sm, md, lg] = [12, 6, 4];

  return (
    <>
      <hr />
      <h3>Albums</h3>
      <Row>
        <Col xs={sm} md={md} lg={lg} className="mb-4">
          <Album />
        </Col>
      </Row>
    </>
  );
}

export default Albums;