import React from "react";
import { ResponsivePie } from "@nivo/pie";
import "./piechart.css";

export default function Piechart({ data }) {
  return (
    <div
      style={{
        height: "20rem",
        width: "100%",
        position: "relative",
        minWidth: "260px",
      }}
    >
      <div className="space"></div>
      <div style={{ width: "100%", height: "50%" }}>
        <ResponsivePie
          // width={285}
          // height={200}
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          startAngle={83}
          sortByValue={true}
          innerRadius={0.65}
          padAngle={0.7}
          cornerRadius={3}
          fit={false}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "blues" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0.1"]],
          }}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={11}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsRadiusOffset={0.7}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          isInteractive={false}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          animate={false}
          legends={[]}
        />
      </div>
      <div className="growthrateContainer">
        <div className="growthrate">78%</div>
        <div className="growth">Growth</div>
      </div>
      <div className="growth_Container_Content">
        <div className="growth_content">62% Company Growth</div>
        <div className="yearrevenue_container">
          <div className="eachyear_box">
            <div className="icon_square" style={{ backgroundColor: "#E7E7FF" }}>
              <svg
                t="1692256509219"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6626"
                width="20"
                height="20"
              >
                <path
                  d="M563.2 121.904762v83.21219l7.558095 1.26781c28.257524 5.193143 51.516952 14.506667 69.924572 28.062476 17.895619 13.165714 35.132952 32.597333 51.663238 58.172952l3.632762 5.60762-71.168 37.107809-3.023238-4.534857c-25.014857-37.546667-57.148952-56.368762-96.060953-56.368762-26.136381 0-48.054857 7.363048-65.340952 21.894095-17.67619 14.872381-26.575238 33.572571-26.575238 55.783619 0 20.23619 7.314286 37.351619 21.747809 50.809905 11.702857 10.922667 33.255619 23.332571 65.511619 37.644191l24.624762 10.630095c29.574095 12.873143 54.00381 24.84419 73.532953 36.035047 21.650286 12.483048 37.888 24.405333 48.542476 35.669334 30.768762 30.96381 46.006857 68.022857 46.006857 111.762285 0 43.056762-13.848381 80.969143-41.545143 113.883429-27.136 32.426667-63.463619 54.418286-108.982857 65.999238L563.2 902.095238h-73.142857v-85.065143l-8.923429-1.462857c-49.127619-8.777143-86.966857-25.404952-113.273904-49.980952-25.84381-24.088381-45.470476-60.586667-58.904381-109.275429l-1.755429-6.339047 80.944762-15.798858 1.731048 4.998096c12.361143 35.59619 27.233524 61.44 44.422095 77.482666 20.48 17.505524 47.177143 26.209524 80.530285 26.209524 32.402286 0 59.587048-9.825524 81.481143-29.403428 21.77219-19.577905 32.768-44.958476 32.768-75.678477 0-27.623619-9.264762-50.029714-27.501714-66.803809-9.020952-7.94819-21.991619-16.65219-39.740952-26.697143a618.666667 618.666667 0 0 0-55.881143-27.306667l-18.041905-7.753143c-48.810667-21.113905-81.334857-40.472381-96.743619-57.685333-26.404571-27.648-39.472762-60.342857-39.472762-98.620952 0-18.066286 3.072-34.889143 9.264762-50.541715a140.751238 140.751238 0 0 1 26.843429-42.276571c11.629714-12.483048 26.160762-23.576381 43.422476-33.109333 16.969143-9.167238 36.571429-16.481524 58.831238-21.991619V121.904762h73.142857z"
                  p-id="6627"
                  fill="#696cff"
                ></path>
              </svg>
            </div>
            <div className="eachyearbox_content">
              <div>2023</div>
              <div
                style={{ fontWeight: "600", color: "rgba(50, 71, 92, 0.87)" }}
              >
                $32.5k
              </div>
            </div>
          </div>

          <div className="eachyear_box">
            <div className="icon_square" style={{ backgroundColor: "#D6F5FC" }}>
              <svg
                t="1692256622775"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7826"
                width="20"
                height="20"
              >
                <path
                  d="M810.666667 298.666667h-42.666667V256a128 128 0 0 0-128-128H213.333333a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h597.333334a128 128 0 0 0 128-128v-341.333333a128 128 0 0 0-128-128zM213.333333 213.333333h426.666667a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H213.333333a42.666667 42.666667 0 0 1 0-85.333334z m640 426.666667h-42.666666a42.666667 42.666667 0 0 1 0-85.333333h42.666666z m0-170.666667h-42.666666a128 128 0 0 0 0 256h42.666666v42.666667a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V376.746667A128 128 0 0 0 213.333333 384h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667z"
                  p-id="7827"
                  fill="#03c3ec"
                ></path>
              </svg>
            </div>
            <div className="eachyearbox_content">
              <div>2022</div>
              <div
                style={{ fontWeight: "700", color: "rgba(50, 71, 92, 0.87)" }}
              >
                $41.2k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
