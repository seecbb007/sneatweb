import React from "react";
import "./visitorsCard.css";
//nivo
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

export default function VisitorsCard({ visitorsAData }) {
  const newVisitorData = visitorsAData?.newVisitors[0];
  const visitorsActivityData = visitorsAData?.activity[0];
  const chartData = visitorsAData?.revenueBarData;
  const lineData = visitorsAData?.lineChart;
  //bar colors
  const colors = {
    burger: "#E7E7FF",
    kebab: "#7F82FF",
  };
  const getColor = (bar) => colors[bar.id];

  const lineColors = {
    series1: "#71DD37",
    // java: "#71DD37",
    // elixir: "#71DD37",
  };
  const getLineColor = (bar) => lineColors[bar.id];
  return (
    <div>
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
        }}
      >
        <div
          className="visitorContainer"
          style={{
            borderRight: "1px solid rgba(50, 71, 92, 0.12)",
            paddingRight: " 1.25rem",
          }}
        >
          <div className="visitorTitle">
            <span className="v_title">New Visitors</span>
            <span className="v_subTitle">Last Week</span>
          </div>
          <div className="visitorInfo">
            <div className="visitorInfo_number">
              <div
                style={{
                  fontSize: "2.0243rem",
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                {newVisitorData?.percentage}%
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {newVisitorData?.growth === "positive" ? (
                  <>
                    <svg
                      t="1693336270527"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3992"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M558 171.2v573.7c0 0.1 0.2 0.2 0.2 0.1l208-216.4c16.8-17.5 44.7-18.1 62.2-1.2 17.5 16.8 18.1 44.7 1.2 62.2L546.5 884.2c-8.3 8.6-19.8 13.5-31.7 13.5-12 0-23.4-4.9-31.7-13.5L198.3 588c-8.2-8.5-12.3-19.5-12.3-30.5 0-11.6 4.5-23.1 13.5-31.7 17.5-16.8 45.4-16.3 62.2 1.2l208 216.4c0.1 0.1 0.2 0 0.2-0.1V170.2c0-23.4 18.3-42.5 41.3-43.9 25.6-1.5 46.8 19.4 46.8 44.9z"
                        p-id="3993"
                        fill="#71DD37"
                      ></path>
                    </svg>

                    <div style={{ color: "#71DD37" }}>
                      {newVisitorData?.growthPercentage}%
                    </div>
                  </>
                ) : (
                  <>
                    <svg
                      t="1693336270527"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3992"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M558 171.2v573.7c0 0.1 0.2 0.2 0.2 0.1l208-216.4c16.8-17.5 44.7-18.1 62.2-1.2 17.5 16.8 18.1 44.7 1.2 62.2L546.5 884.2c-8.3 8.6-19.8 13.5-31.7 13.5-12 0-23.4-4.9-31.7-13.5L198.3 588c-8.2-8.5-12.3-19.5-12.3-30.5 0-11.6 4.5-23.1 13.5-31.7 17.5-16.8 45.4-16.3 62.2 1.2l208 216.4c0.1 0.1 0.2 0 0.2-0.1V170.2c0-23.4 18.3-42.5 41.3-43.9 25.6-1.5 46.8 19.4 46.8 44.9z"
                        p-id="3993"
                        fill="#FF3E1D"
                      ></path>
                    </svg>

                    <div style={{ color: "#FF3E1D" }}>
                      {newVisitorData?.growthPercentage}%
                    </div>
                  </>
                )}
              </div>
            </div>
            <div style={{ width: "70%", height: "13rem" }}>
              {chartData !== undefined && (
                <ResponsiveBar
                  // width={"300"}
                  // height={"200"}
                  data={chartData}
                  keys={["burger", "kebab"]}
                  indexBy="country"
                  margin={{ top: 40, right: 0, bottom: 20, left: 0 }}
                  padding={0.6}
                  innerPadding={2}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={getColor}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "fries",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "sandwich",
                      },
                      id: "lines",
                    },
                  ]}
                  borderRadius={7}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", "1.4"]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,

                    ticksTextFill: "252fc1",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  enableGridY={false}
                  enableLabel={false}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  legends={[]}
                  isInteractive={false}
                  role="application"
                  ariaLabel="Nivo bar chart demo"
                  barAriaLabel={(e) =>
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div
          className="visitorContainer"
          style={{
            paddingLeft: " 1.25rem",
          }}
        >
          <div className="visitorTitle">
            <span className="v_title">Activity</span>
            <span className="v_subTitle">Last Week</span>
          </div>
          <div className="visitorInfo">
            <div className="visitorInfo_number">
              <div
                style={{
                  fontSize: "2.0243rem",
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                {visitorsActivityData?.percentage}%
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {visitorsActivityData?.growth === "positive" ? (
                  <>
                    <svg
                      t="1693336270527"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3992"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M558 171.2v573.7c0 0.1 0.2 0.2 0.2 0.1l208-216.4c16.8-17.5 44.7-18.1 62.2-1.2 17.5 16.8 18.1 44.7 1.2 62.2L546.5 884.2c-8.3 8.6-19.8 13.5-31.7 13.5-12 0-23.4-4.9-31.7-13.5L198.3 588c-8.2-8.5-12.3-19.5-12.3-30.5 0-11.6 4.5-23.1 13.5-31.7 17.5-16.8 45.4-16.3 62.2 1.2l208 216.4c0.1 0.1 0.2 0 0.2-0.1V170.2c0-23.4 18.3-42.5 41.3-43.9 25.6-1.5 46.8 19.4 46.8 44.9z"
                        p-id="3993"
                        fill="#71DD37"
                      ></path>
                    </svg>

                    <div style={{ color: "#71DD37" }}>
                      {visitorsActivityData?.growthPercentage}%
                    </div>
                  </>
                ) : (
                  <>
                    <svg
                      t="1693336270527"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3992"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M558 171.2v573.7c0 0.1 0.2 0.2 0.2 0.1l208-216.4c16.8-17.5 44.7-18.1 62.2-1.2 17.5 16.8 18.1 44.7 1.2 62.2L546.5 884.2c-8.3 8.6-19.8 13.5-31.7 13.5-12 0-23.4-4.9-31.7-13.5L198.3 588c-8.2-8.5-12.3-19.5-12.3-30.5 0-11.6 4.5-23.1 13.5-31.7 17.5-16.8 45.4-16.3 62.2 1.2l208 216.4c0.1 0.1 0.2 0 0.2-0.1V170.2c0-23.4 18.3-42.5 41.3-43.9 25.6-1.5 46.8 19.4 46.8 44.9z"
                        p-id="3993"
                        fill="#FF3E1D"
                      ></path>
                    </svg>

                    <div style={{ color: "#FF3E1D" }}>
                      {visitorsActivityData?.growthPercentage}%
                    </div>
                  </>
                )}
              </div>
            </div>
            <div style={{ width: "70%", height: "13rem" }}>
              {lineData !== undefined && (
                <ResponsiveLine
                  data={lineData}
                  margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                  }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "transportation",
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={null}
                  enablePoints={false}
                  enableGridX={false}
                  enableGridY={false}
                  colors={getLineColor}
                  lineWidth={3}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={3}
                  pointBorderColor="black"
                  pointLabelYOffset={-15}
                  useMesh={true}
                  legends={[]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
