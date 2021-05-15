import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./App.css";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/search")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  const [ sm, md, lg ] = [ 12, 6, 4 ];

  return (
    <Container className="p-3">

      <Jumbotron>
        <h1 className="header">Xploro Test: Using Spotify's Search API</h1>
      </Jumbotron>
      <Form>
        <Form.Group controlId="formSearch">
          <Form.Label>Keywords Search</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter search query keywords" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />

      <h3>Albums</h3>
      <Row>
        <Col xs={sm} md={md} lg={lg} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647" />
            <Card.Body>
              <div className="float-right">2019</div>
              <Card.Title>
                Lover
              </Card.Title>
              <div className="float-right">
                <a href="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq" title="Open album online" target="_blank">
                  <img src="web.png" className="ml-4 mr-1" />
                </a>
                <a href="spotify:album:1NAmidJlEaVgA3MpcPFYGq" title="Open album in Spotify">
                  <img src="spotify.png" className="mr-1 ml-1" />
                </a>
              </div>
              <Card.Subtitle>
                <a href="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">Taylor Swift</a>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
