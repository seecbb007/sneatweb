import React from "react";
import "./totalIncome.css";
//nivo
import { ResponsiveLine } from "@nivo/line";
import { lightGreen } from "@mui/material/colors";

//mui dropdown
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui folder list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Typography } from "@mui/material";

export default function TotalIncome({ reportIepData }) {
  //mui dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    {
      id: "income",
      color: "hsl(79, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 3350,
        },
        {
          x: "Feb",
          y: 3350,
        },
        {
          x: "Mar",
          y: 4800,
        },
        {
          x: "Apr",
          y: 4800,
        },
        {
          x: "May",
          y: 2950,
        },
        {
          x: "Jun",
          y: 2950,
        },
        {
          x: "Jul",
          y: 1800,
        },
        {
          x: "Aug",
          y: 1800,
        },
        {
          x: "Sep",
          y: 3750,
        },
        {
          x: "Oct",
          y: 3750,
        },
        {
          x: "Nov",
          y: 5700,
        },
        {
          x: "Dec",
          y: 5700,
        },
      ],
    },
  ];
  const color = {
    income: "#696CFF",
  };

  const getColor = (bar) => color[bar.id];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // backgroundColor: "lightGreen"
      }}
    >
      <div className="totalIncomeReport" style={{ height: "100%" }}>
        <div
          className="totalIncomeContainer"
          style={{
            borderRight: "1px solid rgba(50, 71, 92, 0.12)",
            width: "70%",
            height: "100%",
          }}
        >
          <div
            className="graphContainer"
            style={{ height: "100%", padding: "1rem 0rem 1rem 1.2rem" }}
          >
            <div className="tIR_title"> Total Income</div>
            <div className="tIR_subtitle"> Yearly report overview</div>
            <div style={{ height: "85%" }}>
              <ResponsiveLine
                data={data}
                colors={getColor}
                margin={{ top: 20, right: 20, bottom: 30, left: 35 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "1000",
                  max: "6000",
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
                  // legend: "transportation",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  // legend: "count",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                enableGridX={false}
                lineWidth={3}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-9}
                enableArea={true}
                areaBaselineValue={1000}
                areaBlendMode="normal"
                areaOpacity={0.09}
                useMesh={true}
                legends={[]}
              />
            </div>
          </div>
        </div>
        <div
          className="totalIncomeContainer"
          style={{
            width: "30%",
            height: "100%",
            // backgroundColor: "red",
            padding: "0.2rem 0rem 1rem 0rem",
          }}
        >
          <div className="listContainer">
            <div className="listTitleContainer">
              <div className="tIR_title">Report</div>
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
            <div className="tIR_subtitle">Monthly Avg.$45.578k</div>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                // padding: "0.5rem 1rem",
              }}
            >
              {reportIepData?.map((eachItem) => {
                return (
                  <ListItem
                    sx={{
                      backgroundColor: "#F5F5F9",
                      marginBottom: "0.5rem",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: "white",
                          boxShadow: "rgba(50,71,92,.01)0px 2px 10px 0px",
                        }}
                        variant="rounded"
                      >
                        <img
                          src={eachItem?.imgurl}
                          style={{ width: "1.3rem", height: "1.4rem" }}
                        ></img>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={eachItem.title}
                      secondary={
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            whiteSpace: "nowrap",
                          }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <span
                            style={{
                              color: "rgba(50, 71, 92, 0.87)",
                              fontSize: "1.2rem",
                              fontWeight: "600",
                            }}
                          >
                            ${eachItem?.amount}
                          </span>
                          <span
                            style={{
                              color: eachItem.color,
                              overflow: "hidden",
                            }}
                          >
                            {eachItem?.growthAmount}k
                          </span>
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
              {/* <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem> */}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
