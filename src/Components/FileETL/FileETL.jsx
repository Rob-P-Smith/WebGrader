function FileETL() {
  return (
    <div className="fileETL">
      <h1>File ETL Area</h1>
      <p>
        File Load
        <button className="ETLButton" onClick={() => alert("Button clicked!")}>
          Load
        </button>
      </p>
      <p>
        File Save Target
        <button className="ETLButton" onClick={() => alert("Button clicked!")}>
          Save
        </button>
      </p>
      <p>
        Rubric Box
        <button className="ETLButton" onClick={() => alert("Button clicked!")}>
          Open
        </button>
      </p>
    </div>
  );
}

export default FileETL;
