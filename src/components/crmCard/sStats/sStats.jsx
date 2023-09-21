import React from "react";

//nivo
import { ResponsivePie } from "@nivo/pie";
//mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//mui

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SStats() {
  //dropdown dots
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pieData = [
    {
      id: "coversion_Ratio",
      label: "Coversion Ratio",
      value: 259,
    },

    {
      id: "total_Requirements",
      label: "Total requirements",
      value: 60,
    },
  ];
  const colors = {
    series1: "#696CFF",
    coversion_Ratio: "#71DD37",
    total_Requirements: "#EBEEF0",
  };

  const getColor = (bar) => colors[bar.id];
  return (
    <div>
      <div className="topProducts">
        <div
          className="topProductsContainer"
          style={{ borderRight: " 1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <div className="topProductsTitle">
            <div className="topP_Title">Sales Status</div>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <IconButton aria-label="Example" onClick={handleClick}>
                <svg
                  t="1692070017615"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4200"
                  width="20"
                  height="20"
                >
                  <path
                    d="M600.746667 221.866667c18.773333-32.426667 18.773333-71.68 0-104.106667S546.133333 66.56 510.293333 68.266667c-56.32 1.706667-100.693333 46.08-100.693333 102.4s44.373333 100.693333 100.693333 102.4c35.84 1.706667 71.68-18.773333 90.453334-51.2zM409.6 512c0 56.32 46.08 102.4 102.4 102.4s102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4-102.4 46.08-102.4 102.4zM512 955.733333c56.32 0 102.4-46.08 102.4-102.4s-46.08-102.4-102.4-102.4-102.4 46.08-102.4 102.4 46.08 102.4 102.4 102.4z"
                    fill="#32475c"
                    p-id="4201"
                  ></path>
                </svg>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Last 28 Days</MenuItem>
                <MenuItem onClick={handleClose}>Last Month</MenuItem>
                <MenuItem onClick={handleClose}>Last Year</MenuItem>
              </Menu>
            </Box>
          </div>
          <div
            className="tabPanelContainer_details"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="tabPanel_details_graph"
              style={{
                height: "25rem",
                width: "18rem",
              }}
            >
              <ResponsivePie
                data={pieData}
                // wid={300}
                colors={getColor}
                margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
                innerRadius={0.85}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
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
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 10,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 10,
                    symbolSize: 15,
                    itemDirection: "left-to-right",
                    borderRadius: "50%",
                  },
                ]}
              />
            </div>
            <Box
              position="absolute"
              top="33%"
              left="40%"
              color="grey"
              textAlign="center"
              width={80}
              height={80}
              transition={"all 2s ease-out"}
            >
              <Typography variant="h6">
                <svg
                  t="1693206198341"
                  viewBox="0 0 1344 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="18111"
                  width="30"
                  height="30"
                >
                  <path
                    d="M1248 0c-52.928 0-96 43.072-96 96 0 28.416 12.672 53.728 32.352 71.328l-281.6 448.992A95.104 95.104 0 0 0 864 608c-27.776 0-52.608 12.032-70.176 30.944l-290.336-183.84c5.376-11.968 8.512-25.152 8.512-39.104 0-52.928-43.072-96-96-96s-96 43.072-96 96c0 28.928 13.12 54.592 33.408 72.192L132.768 839.392A95.104 95.104 0 0 0 96 832c-52.928 0-96 43.072-96 96s43.072 96 96 96 96-43.072 96-96c0-28.416-12.64-53.696-32.32-71.296l220.928-351.68c10.976 4.416 22.88 6.976 35.392 6.976 27.488 0 52.128-11.744 69.632-30.304l290.496 183.936A95.392 95.392 0 0 0 768 704c0 52.928 43.072 96 96 96s96-43.072 96-96c0-27.616-11.872-52.352-30.624-69.888l281.92-449.472c11.328 4.704 23.712 7.36 36.704 7.36 52.928 0 96-43.072 96-96s-43.072-96-96-96zM160 928c0 35.296-28.704 64-64 64s-64-28.704-64-64 28.704-64 64-64 64 28.704 64 64z m256-448c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64z m448 288c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64zM1248 160c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64z"
                    fill="#71DD37"
                    p-id="18112"
                  ></path>
                </svg>
              </Typography>
              <Typography variant="h4">75%</Typography>
              <Typography variant="h7">Sales</Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
