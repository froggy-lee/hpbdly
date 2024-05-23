import React from "react";
import "./styles.scss";

function Loading() {
  return (
    <div>
      <div className="container">
        <div className="progress progress-striped">
          <div className="progress-bar"></div>
        </div>
        <div>Loading...</div>
      </div>
      <div></div>
    </div>
  );
}

export default Loading;
