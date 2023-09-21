import React from "react";

//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//nivo
import { ResponsiveRadar } from "@nivo/radar";

export default function PerformanceRadar() {
  //dropdown dots
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //data
  const data = [
    {
      taste: "Jan",
      Income: 68,
      Earning: 88,
    },
    {
      taste: "Feb",
      Income: 67,
      Earning: 60,
    },
    {
      taste: "Mar",
      Income: 75,
      Earning: 69,
    },
    {
      taste: "Apr",
      Income: 109,
      Earning: 87,
    },
    {
      taste: "May",
      Income: 86,
      Earning: 69,
    },
    {
      taste: "Jun",
      Income: 86,
      Earning: 110,
    },
  ];
  return (
    <div style={{ padding: "1.5rem 1rem", width: "100%", height: "100%" }}>
      <div className="topProductsTitle">
        <div className="topP_Title">Performance</div>
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
            <MenuItem onClick={handleClose}>Last Week</MenuItem>
            <MenuItem onClick={handleClose}>Last Month</MenuItem>
            <MenuItem onClick={handleClose}>Last Year</MenuItem>
          </Menu>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60%",
          color: "rgba(50, 71, 92, 0.6)",
        }}
      >
        <div>Earning: $846.17</div>
        <div>Sales: 25.7M</div>
      </div>
      <div style={{ width: "100%", height: "90%" }}>
        <ResponsiveRadar
          data={data}
          keys={["Income", "Earning"]}
          indexBy="taste"
          valueFormat=">-.2f"
          margin={{ top: 70, right: 80, bottom: 80, left: 80 }}
          borderWidth={0}
          borderColor={{ from: "color" }}
          gridLevels={3}
          gridShape="linear"
          gridLabelOffset={10}
          enableDots={false}
          dotSize={13}
          dotColor={{ theme: "background" }}
          dotBorderWidth={2}
          dotBorderColor="black"
          colors={{ scheme: "purpleRed_green" }}
          fillOpacity={0.65}
          blendMode="normal"
          motionConfig="wobbly"
          legends={[
            {
              anchor: "center",
              direction: "row",
              translateX: -80,
              translateY: 80,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: "#999",
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
