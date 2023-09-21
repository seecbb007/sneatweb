import React from "react";

//nivo
import { ResponsiveBar } from "@nivo/bar";
export default function ProfitCard() {
  const data = [
    {
      country: "Jan",
      burger: 100,
      burgerColor: "hsl(75, 70%, 50%)",
      sandwich: 163,
      sandwichColor: "hsl(58, 70%, 50%)",
    },
    {
      country: "Apr",

      burger: 86,
      burgerColor: "hsl(181, 70%, 50%)",
      sandwich: 78,
      sandwichColor: "hsl(304, 70%, 50%)",
    },
    {
      country: "Jul",

      burger: 106,
      burgerColor: "hsl(175, 70%, 50%)",
      sandwich: 115,
      sandwichColor: "hsl(259, 70%, 50%)",
    },
    {
      country: "Oct",

      burger: 186,
      burgerColor: "hsl(185, 70%, 50%)",
      sandwich: 131,
      sandwichColor: "hsl(129, 70%, 50%)",
    },
  ];
  const colors = {
    burger: "#71DD37",
    sandwich: "#E3F8D7",
  };
  const getColor = (bar) => colors[bar.id];

  return (
    <div>
      <div style={{ padding: "1rem 1.5rem" }}>
        <div style={{ color: "rgba(50, 71, 92, 0.6)", fontWeight: "600" }}>
          Profit
        </div>
        <div
          style={{
            color: "rgba(50, 71, 92, 0.87)",
            fontWeight: "600",
            fontSize: "1.45rem",
          }}
        >
          624k
        </div>
        <div style={{ width: "12rem", height: "6rem" }}>
          <ResponsiveBar
            data={data}
            keys={["burger", "sandwich"]}
            indexBy="country"
            margin={{ top: 0, right: 0, bottom: 15, left: 0 }}
            padding={0.6}
            innerPadding={4}
            groupMode="grouped"
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
                id: "",
              },
            ]}
            borderRadius={7}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 3,
              tickRotation: 0,

              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={null}
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
        </div>
      </div>
    </div>
  );
}
