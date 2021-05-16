import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import Results from "./Results";

const App = () => {
  const [results, setResults] = React.useState(null);

  React.useEffect(() => {
    fetch("/search")
      .then(res => res.json())
      .then(json => setResults(json.results));
  }, []);

  return (
    <Container className="p-3">
      <Header />
      <Form>
        <Form.Group controlId="formSearch">
          <Form.Label>Keywords Search</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter search query keywords" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Results results={results} />
    </Container>
  );
};

export default App;
