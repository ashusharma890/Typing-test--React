import React from "react";
import Graph from "./Graph";
import { ModalHover } from "react-modal-hover";

const Stats = ({
  wpm,
  accuracy,
  graphData,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
}) => {
  console.log(graphData);
  var timeSet = new Set();
  const newGraph = graphData.filter((i) => {
    if (!timeSet.has[i[0]]) {
      timeSet.add(i[0]);
      return i;
    }
  });

  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy} %</div>
        <div className="title">Characters</div>
        <div className="subtitle">
          {correctChars}/{incorrectChars}/{missedChars}/{extraChars}
        </div>
      </div>
      <div className="right-stats">
        <Graph color={accuracy < 50 ? "red" : "green"} graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;
