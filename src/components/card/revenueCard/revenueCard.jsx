import React, { useEffect } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";
import { connect, useSelector, useDispatch } from "react-redux";
import { setAnalysisData } from "../../../store/actions/AnalysisAction";
export default function RevenueCard() {
  const colors = {
    burger: "#E7E7FF",
    kebab: "#7F82FF",
  };
  const getColor = (bar) => colors[bar.id];
  // get data from backend and set to redux store
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.TotalRevenueReducer.data;
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/dashboards/analytics")
      .then((res) => {
        dispatch(setAnalysisData(res.data));
      })
      .catch((error) => {
        console.log("axios did not get data", error);
      });
  }, []);
  const revenueCardData = data?.revenueBarData;

  return (
    <div
      style={{
        color: "rgba(50, 71, 92, 0.6)",
        fontWeight: "700",
        fontSize: "700",
        height: "20rem",
        width: "100%",
      }}
    >
      <div style={{ padding: " 0.5rem 1rem 0 1rem" }}>
        <div>Revenue</div>
        <div style={{ fontSize: " 1.5rem" }}>425k</div>
      </div>
      <div style={{ width: "100%", height: "35%" }}>
        {revenueCardData !== undefined && (
          <ResponsiveBar
            data={revenueCardData}
            keys={["burger", "kebab"]}
            indexBy="country"
            margin={{ top: 0, right: 0, bottom: 25, left: 0 }}
            padding={0.45}
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
            //   axisTicketLineStroke={"#d20f0f"}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // legend: "country",
              // LineStroke: "red",
              ticksTextFill: "252fc1",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            //   axisLeft={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: "food",
            //     legendPosition: "middle",
            //     legendOffset: -40,
            //   }}
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
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        )}
      </div>
    </div>
  );
}
