import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Search = (props) => {
  const [searchString, setSearchString] = React.useState("");

  const handleSubmit = e => {
    props.onNewSearch(searchString);
    e.preventDefault();
  };

  const handleInputChange = e => {
    setSearchString(e.target.value)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSearch">
        <Form.Label>Keywords Search</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          defaultValue={searchString}
          onChange={handleInputChange}
          placeholder="Enter search query keywords" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default Search;