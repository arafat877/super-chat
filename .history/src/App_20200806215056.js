import React from "react";
import "./App.scss";

function App() {

  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container mt-3 mb-3 appWrapper">
        <div className="row">
          <div className="col-md-1 border">
            <div className="row border h-20">
              1
            </div>
            <div className="row border h-60">
              1
            </div>
            <div className="row border h-20">
              1
            </div>
          </div>
          <div className="col-md-3 border">2</div>
          <div className="col-md-8 border">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
