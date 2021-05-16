import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./App.css";
import Albums from "./Albums";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/search")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

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
      <Albums results={data} />
    </Container>
  );
};

export default App;
