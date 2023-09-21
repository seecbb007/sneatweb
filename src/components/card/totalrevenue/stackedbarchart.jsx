import React, { useEffect, useState } from "react";
import { ResponsiveBar, BarExtendedDatum } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

function Stackedbarchart({ data }) {
  const colors = {
    revenue_2022: "#696CFF",
    revenue_2021: "#03C3EC",
  };
  const colorcrm = {
    revenue_2022: "#8592A3",
    revenue_2021: "#FF3E1D",
  };
  const colorEcommerce = {
    revenue_2022: "#696CFF",
    revenue_2021: "#FFC040",
  };

  // const getColorcrm = (bar) => colorcrm[bar.id];

  const [currentColor, setCurrentColor] = useState(colors);
  const [currentWidth, setCurrentWidth] = useState("600");
  const [currentGridY, setCurrentGridY] = useState(true);
  const [currentLegends, setCurrentLegends] = useState([
    {
      dataFrom: "keys",
      anchor: "top-left",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: -30,
      itemsSpacing: 100,
      itemWidth: 10,
      itemHeight: 10,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 10,
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ]);
  const theme = useTheme();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("crm")) {
      setCurrentColor(colorcrm);
      setCurrentWidth("450");
      setCurrentGridY(false);
      setCurrentLegends([]);
    } else if (location.pathname.includes("analytics")) {
      setCurrentColor(colors);
      setCurrentWidth("600");
      setCurrentGridY(true);
      setCurrentLegends([
        {
          dataFrom: "keys",
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -30,
          itemsSpacing: 100,
          itemWidth: 10,
          itemHeight: 10,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]);
    } else if (location.pathname.includes("ecommerce")) {
      setCurrentColor(colorEcommerce);
      setCurrentWidth("250");
      setCurrentGridY(false);
      setCurrentLegends([]);
    }
  }, [location]);
  const getColor = (bar) => currentColor[bar.id];
  return (
    <div style={{ height: "20rem", width: "100%" }}>
      <ResponsiveBar
        width={currentWidth}
        data={data}
        keys={["revenue_2022", "revenue_2021"]}
        indexBy="month"
        margin={{ top: 50, right: 20, bottom: 50, left: 30 }}
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
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          //   legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          //   legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridY={currentGridY}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        // labelTextColor={{
        //   from: "color",
        //   modifiers: [["darker", 1.6]],
        // }}
        labelTextColor="rgba(50,71,92,0.87)"
        legends={currentLegends}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
}

export default Stackedbarchart;
