import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/search")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Xploro Test</h1>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
