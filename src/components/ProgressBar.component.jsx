import React from "react";

const ProgressBar = ({totalTask}) => {
  const convertToPercent = 100 / totalTask
  return (
    <div class="progress mt-3">
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${convertToPercent}%` }}
        aria-valuenow={convertToPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {convertToPercent}%
      </div>
    </div>
  );
};

export default ProgressBar;
