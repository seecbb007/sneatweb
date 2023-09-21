import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import Stackedbarchart from "../../card/totalrevenue/stackedbarchart";
export default function ExpensesChartCard({ stackedBarData }) {
  const colorEcommerce = {
    revenue_2022: "#696CFF",
    revenue_2021: "#FFC040",
  };

  const getColor = (bar) => colorEcommerce[bar.id];
  return (
    <div style={{ padding: "1.5rem 1rem", width: "100%", height: "100%" }}>
      <div className="topProductsTitle">
        <div className="topP_Title">Expenses</div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "90%",
          //   justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="expensesInfo">
          <div
            style={{
              fontSize: "1.49rem",
              marginRight: "3rem",
            }}
          >
            $84.7k
          </div>
          <div>
            <svg
              t="1693463055084"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1459"
              width="20"
              height="20"
            >
              <path
                d="M478.4 595.2V352a32 32 0 1 1 64 0v242.56l104.96-104.96a32 32 0 1 1 45.12 45.12l-156.48 156.48a31.936 31.936 0 0 1-25.6 12.8 32 32 0 0 1-22.72-9.28l-160-160a32 32 0 0 1 45.12-45.12l105.6 105.6z"
                fill="#FF3E1D"
                p-id="1460"
              ></path>
            </svg>
            8.2%
          </div>
          <div
            style={{
              color: "rgb(133, 146, 163)",
              padding: "0rem 0.3rem",
              marginTop: "3rem",
              backgroundColor: "rgba(133, 146, 163, 0.16)",
              textAlign: "center",
              borderRadius: "0.3rem",
            }}
          >
            JULY 2023
          </div>
        </div>
        <div
          className="expensesGraph"
          style={{
            width: "69%",
            height: "100%",
            //  backgroundColor: "red"
          }}
        >
          {stackedBarData !== undefined && (
            <ResponsiveBar
              data={stackedBarData}
              keys={["revenue_2022", "revenue_2021"]}
              indexBy="month"
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              padding={0.65}
              innerPadding={2}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={getColor}
              maxValue={30}
              minValue={-20}
              // colors={["#696CFF", "#03C3EC"]}
              // colors={["#111111", "#222222"]}
              // colorBy="index"
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
              borderRadius={13}
              // borderColor={{
              //   from: "color",
              //   modifiers: [["darker", 1.6]],
              // }}
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={null}
              enableGridY={false}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              // labelTextColor={{
              //   from: "color",
              //   modifiers: [["darker", 1.6]],
              // }}
              labelTextColor="rgba(50,71,92,0.87)"
              legends={[]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
