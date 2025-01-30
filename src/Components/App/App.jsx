import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>LLM Response Area</h1>
        <p>Parse the JSON to text fields here</p>
        <button onClick={() => alert("Button clicked!")}>Export</button>
      </div>
    </div>
  );
}

export default App;
