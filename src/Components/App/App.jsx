import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>Hello World!</h1>
        <p>Testing Hot Reload.</p>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
