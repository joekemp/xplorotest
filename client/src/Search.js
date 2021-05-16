import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Search = (props) => {
  const [queryString, setQueryString] = React.useState("");
  const [searchType, setSearchType] = React.useState("album");

  const handleSubmit = e => {
    props.onNewSearch(queryString, searchType);
    e.preventDefault();
  };

  const handleQueryChange = e => {
    setQueryString(e.target.value)
  };

  const handleTypeChange = e => {
    console.log(`Type changed to ${e.target.value}`);
    setSearchType(e.target.value)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSearchQuery">
        <Form.Label>Keywords Search</Form.Label>
        <Form.Control
          as="input"
          size="lg"
          type="text"
          defaultValue={queryString}
          onChange={handleQueryChange}
          placeholder="Enter search query keywords"
        />
      </Form.Group>
      <Form.Group controlId="formSearchType">
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          defaultValue={searchType}
          onChange={handleTypeChange}
        >
          <option value="album">Albums</option>
          <option value="artist">Artists</option>
          <option value="track">Tracks</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default Search;