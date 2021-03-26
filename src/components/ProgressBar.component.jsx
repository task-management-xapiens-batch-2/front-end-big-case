import React from "react";

const ProgressBar = () => {
  return (
    <div class="progress mt-3">
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: "75%" }}
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        75%
      </div>
    </div>
  );
};

export default ProgressBar;
