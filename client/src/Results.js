import React from "react";
import Albums from "./Albums";

const Results = (props) => {
  let output;
  if (!props.results) {
    output = <p className="font-italic text-center">No results</p>;
  } else if (props.results.albums) {
    output = <Albums albums={props.results.albums} />;
  }

  return (
    <>
      <hr />
      {output}
    </>
  );
};

export default Results;
