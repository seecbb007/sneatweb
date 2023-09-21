import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./profitReport.css";
export default function ProfitReport() {
  const data = [
    {
      id: "us",
      color: "hsl(209, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 122,
        },
        {
          x: "helicopter",
          y: 65,
        },
        {
          x: "boat",
          y: 221,
        },
        {
          x: "train",
          y: 109,
        },
        {
          x: "subway",
          y: 96,
        },
        {
          x: "bus",
          y: 129,
        },
        {
          x: "car",
          y: 277,
        },
        {
          x: "moto",
          y: 167,
        },
        {
          x: "bicycle",
          y: 21,
        },
        {
          x: "horse",
          y: 277,
        },
        {
          x: "skateboard",
          y: 83,
        },
        {
          x: "others",
          y: 80,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="profitReportCard">
        <div className="profitReport_Content">
          <div className="profitReport_title">Profit Report</div>
          <div className="profitReport_yearbar">YEAR 2023</div>
          <div>
            <div className="pR_percentage">
              <svg
                t="1692505853180"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4420"
                width="20"
                height="20"
              >
                <path
                  d="M512 471.466667l181.034667 181.034666a42.666667 42.666667 0 1 0 60.330666-60.330666l-211.2-211.2a42.666667 42.666667 0 0 0-60.330666 0l-211.2 211.2a42.666667 42.666667 0 1 0 60.330666 60.330666L512 471.466667z"
                  fill="#71DD37"
                  p-id="4421"
                ></path>
              </svg>
              68.2%
            </div>
            <div className="pR_amount">$84,686k</div>
          </div>
        </div>
        <div
          className="profitReport_Graph"
          style={{ height: "6rem", width: "100%" }}
        >
          <ResponsiveLine
            data={data}
            width={250}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            pointSize={5}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-13}
            isInteractive={false}
            enableCrosshair={false}
            legends={[]}
          />
        </div>
      </div>
    </div>
  );
}
