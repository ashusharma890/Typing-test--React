import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ color, graphData }) => {
  return (
    <div>
      <Line
        data={{
          labels: graphData.map((i) => i[0] + 1),
          datasets: [
            {
              data: graphData.map((i) => i[1]),
              label: "Words per minute",
              borderColor: color,
            },
          ],
        }}
      ></Line>
    </div>
  );
};

export default Graph;
