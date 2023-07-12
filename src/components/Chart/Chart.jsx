import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValuesArray=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...dataPointValuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.title}
          key={dataPoint.title}
        />
      ))}
    </div>
  );
};

export default Chart;
