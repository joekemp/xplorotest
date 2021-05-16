import React from "react";
import Albums from "./Albums";
import Artists from "./Artists";

const Results = (props) => {
  let output;
  if (!props.results) {
    output = <p className="font-italic text-center">No results</p>;
  } else if (props.results.albums) {
    output = <Albums albums={props.results.albums} />;
  } else if (props.results.artists) {
    output = <Artists artists={props.results.artists} />;
  }

  return (
    <>
      <hr />
      {output}
    </>
  );
};

export default Results;
