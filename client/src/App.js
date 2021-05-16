import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

const App = () => {
  const [results, setResults] = React.useState(null);

  const performSearch = (queryString, searchType) => {
    console.log(`Performing search with string "${queryString}"`);
    fetch("/search", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        query: queryString,
        type: searchType
      })
    })
    .then(res => res.json())
    .then(json => setResults(json.results));
  };

  return (
    <Container className="p-3">
      <Header />
      <Search onNewSearch={performSearch} />
      <Results results={results} />
    </Container>
  );
};

export default App;
