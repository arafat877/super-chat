import React from "react";
import "./App.scss";

function App() {

  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container mt-3 mb-3 appWrapper">
        <div className="row">
          <div className="col-md-1 h-100 border">1</div>
          <div className="col-md-3 border">2</div>
          <div className="col-md-8 border">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
