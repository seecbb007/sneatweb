import React, { useEffect, useState } from "react";
import "./leads.css";
//nivo
import { ResponsivePie } from "@nivo/pie";

//mui
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Leads({ pieData, leadsData }) {
  const [currentGrowth, setCurrentGrowth] = useState("");
  const [currentPercentageColor, setCurrentPercentageColor] = useState("");

  const [pieDisplayInfo, setPieDisplayInfo] = useState({
    percentage: "25%",
    label: "Average",
  });
  const handlePieMouseEnter = (target) => {
    setPieDisplayInfo({
      percentage: target.data.value + "%",
      label: target.data.label,
    });
  };

  const handlePieMouseLeave = () => {
    setPieDisplayInfo({
      percentage: 25 + "%",
      label: "Average",
    });
  };
  const growth = leadsData?.growth;
  useEffect(() => {
    if (growth === "positive") {
      setCurrentGrowth(
        <svg
          t="1693110723308"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9945"
          width="25"
          height="25"
        >
          <path
            d="M840.832 456.832a42.666667 42.666667 0 0 1-60.330667 0L554.666667 230.997333V896a42.666667 42.666667 0 0 1-85.333334 0V230.997333l-225.834666 225.834667a42.666667 42.666667 0 0 1-60.330667-60.330667l298.666667-298.666666a42.666667 42.666667 0 0 1 60.330666 0l298.666667 298.666666a42.666667 42.666667 0 0 1 0 60.330667z"
            fill="#71DD37"
            p-id="9946"
          ></path>
        </svg>
      );
      setCurrentPercentageColor("#71DD37");
    } else {
      setCurrentGrowth(
        <svg
          t="1693110761890"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10961"
          width="30"
          height="30"
        >
          <path
            d="M448 789.312V0h128v789.312l234.688-234.624L896 640l-384 384-384-384 85.312-85.312L448 789.312z"
            fill="#FF5C40"
            p-id="10962"
          ></path>
        </svg>
      );
      setCurrentPercentageColor("#FF5C40");
    }
  }, [growth]);
  return (
    <div>
      <div className="leadsContainer">
        <div className="leads_detailInfo">
          <div className="leads_title">{leadsData?.title}</div>
          <div className="leads_subTitle">{leadsData?.subTitle}</div>
          <div style={{ marginTop: "2rem" }}>
            <div className="leads_amount">{leadsData?.leadNumber}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>{currentGrowth}</div>
              <div style={{ color: currentPercentageColor, fontSize: "24px" }}>
                {leadsData?.percentage}%
              </div>
            </div>
          </div>
        </div>
        <div className="leads_detailgraph">
          <div
            style={{
              width: "10rem",
              height: "10rem",
              //   backgroundColor: "red",
            }}
          >
            {pieData !== undefined && (
              <ResponsivePie
                width={300}
                data={pieData}
                margin={{ top: 15, right: 20, bottom: 25, left: 10 }}
                innerRadius={0.85}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                onMouseEnter={(target) => handlePieMouseEnter(target)}
                onMouseLeave={() => handlePieMouseLeave()}
                colors={{ scheme: "greens" }}
                borderWidth={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={false}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                animate={false}
                legends={[]}
              />
            )}
          </div>
          <div>
            <Box
              position="absolute"
              top="28%"
              right="-20px"
              color="grey"
              textAlign="center"
              width={80}
              height={80}
            >
              <Typography variant="h6" paddingLeft="10px">
                {pieDisplayInfo?.percentage}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                {pieDisplayInfo?.label}
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
