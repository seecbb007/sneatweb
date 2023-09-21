import React, { useState, useEffect } from "react";
import "./earningReport.css";
import { ResponsiveBar } from "@nivo/bar";
//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui inset list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function EarningReport({ earningData, barChartData }) {
  //bar colors
  const colors = {
    burger: "#E7E7FF",
    kebab: "#7F82FF",
  };
  const getColor = (bar) => colors[bar.id];
  //dropdown button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pieDisplayInfo, setPieDisplayInfo] = useState({
    percentage: "38%",
    label: "Weekly",
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="eReport"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="orderS_title"
        style={{
          width: "100%",
          height: "10%",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "1.25rem" }}>
          Earning Report
        </div>

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
            <MenuItem onClick={handleClose}>Refresh</MenuItem>
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Update</MenuItem>
          </Menu>
        </Box>
      </div>
      <div className="orderS_subtitle" style={{ width: "100%" }}>
        Weekly Earnings Overview
      </div>
      <div className="orderS_list" style={{ width: "100%", height: "55%" }}>
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 440,
            bgcolor: "background.paper",
          }}
        >
          {earningData?.map((eachItem) => {
            return (
              <ListItem sx={{ padding: "0.2rem" }}>
                <ListItemAvatar>
                  <Avatar alt="volum icon" src={eachItem?.imgurl} />
                </ListItemAvatar>
                <ListItemText
                  primary={eachItem?.title}
                  secondary={eachItem?.subTitle}
                  sx={{ width: "200px" }}
                />
                <ListItemText sx={{ color: "#32475c" }}>
                  {eachItem?.amount}
                </ListItemText>
                {eachItem?.growth === "positive" ? (
                  <>
                    <ListItemText>
                      <svg
                        t="1693179351377"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4846"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M838.116 732.779 877.7 693.195 511.979 327.549 146.3 693.195 185.883 732.779 512.003 406.652Z"
                          p-id="4847"
                          fill="#71DD37"
                        ></path>
                      </svg>
                    </ListItemText>
                    <ListItemText
                      sx={{
                        color: "rgba(50, 71, 92, 0.38)",
                      }}
                    >
                      {eachItem?.percentage}%
                    </ListItemText>
                  </>
                ) : (
                  <>
                    <ListItemText>
                      <svg
                        t="1693179351377"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4846"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M838.116 732.779 877.7 693.195 511.979 327.549 146.3 693.195 185.883 732.779 512.003 406.652Z"
                          p-id="4847"
                          fill="#FF3E1D"
                        ></path>
                      </svg>
                    </ListItemText>

                    <ListItemText
                      sx={{
                        textAlign: "center",
                        color: "rgba(50, 71, 92, 0.38)",
                      }}
                    >
                      {eachItem?.percentage}
                    </ListItemText>
                  </>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
      <div style={{ width: "100%", height: "35%" }}>
        {barChartData !== undefined && (
          <ResponsiveBar
            // width={"400"}
            // height={"150"}
            data={barChartData}
            keys={["burger", "kebab"]}
            indexBy="country"
            margin={{ top: 10, right: 0, bottom: 30, left: 0 }}
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
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        )}
      </div>
    </div>
  );
}
