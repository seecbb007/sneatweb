import React from "react";
import { useSelector } from "react-redux";
import "./userRating.css";

//nivo
import { ResponsiveLine } from "@nivo/line";

//mui box
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui rating
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function UserRating() {
  //Get Data from  main db_CRM Backend data
  const data = useSelector((state) => {
    return state.crmReducer.data;
  });

  const ratingPointData = data?.customerRating;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //nivo linear chart data
  const linearCharData = [
    {
      id: "series1",
      color: "hsl(222, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 24,
        },
        {
          x: "Feb",
          y: 21,
        },
        {
          x: "Mar",
          y: 30,
        },
        {
          x: "Apr",
          y: 22,
        },
        {
          x: "May",
          y: 42,
        },
        {
          x: "Jun",
          y: 26,
        },
        {
          x: "Jul",
          y: 35,
        },
        {
          x: "Aug",
          y: 29,
        },
      ],
    },
  ];
  const colors = {
    series1: "#696CFF",
    java: "#7A7CFF",
    elixir: "#EBEEF0",
  };
  const getColor = (bar) => colors[bar.id];
  //rating value
  const [ratingValue, setRatingValue] = React.useState(4);

  return (
    <div>
      <div className="orderStatisticCard">
        <div className="orderS_title">
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Customer Ratings
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
              <MenuItem onClick={handleClose}>Share</MenuItem>
              <MenuItem onClick={handleClose}>Refresh</MenuItem>
              <MenuItem onClick={handleClose}>Update</MenuItem>
            </Menu>
          </Box>
        </div>
        <div className="ratingContainer">
          {ratingPointData?.map((eachData) => {
            return (
              <div>
                <div
                  className="ratingContent"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div className="ratingContent_number">
                    {eachData.ratingNumber}.0
                  </div>
                  <Rating name="read-only" value={ratingValue} readOnly />
                </div>
                <div className="ratingContent">
                  <div className="ratingPoint">+{eachData.pointNumber}.0</div>
                  <div
                    className="ratingPoint_content"
                    style={{ color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    Points from last month
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="tabPanelContainer_graph"
          style={{ height: "13rem", width: "100%", margin: "2rem 0" }}
        >
          <ResponsiveLine
            data={linearCharData}
            margin={{ top: 10, right: 10, bottom: 30, left: 10 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
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
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            colors={getColor}
            lineWidth={3}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            pointBorderColor="black"
            pointLabelYOffset={-15}
            useMesh={true}
            legends={[]}
          />
        </div>
      </div>
    </div>
  );
}
