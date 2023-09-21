import React from "react";
import "./totalBalance.css";
//mui dropdown box
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Typography } from "@mui/material";

//nivo line
import { ResponsiveLine } from "@nivo/line";

export default function TotalBalance({ balanceData }) {
  //dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  //renderIcon function
  const renderIcon = (id) => {
    if (id == "wallet") {
      return (
        <Avatar variant="rounded" sx={{ bgcolor: "#FFF1D6" }} src="">
          <svg
            t="1693549007499"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3854"
            width="20"
            height="20"
          >
            <path
              d="M832.36132813 344.80247107H210.09570287l-3.95507812-14.50195286c-9.22851588-31.640625 6.59179662-65.25878906 36.25488332-78.44238307L639.88085963 75.19797915C655.70117213 67.94700233 674.15820313 67.28782289 690.63769505 73.87961952s29.66308594 18.457031 36.91406276 34.93652368L832.36132813 344.80247107z m-588.6474612-39.55078125h527.34375026L691.29687525 124.63645571c-2.6367185-6.59179662-7.91015625-11.20605494-14.50195363-13.84277345-6.59179662-2.6367185-13.84277344-2.6367185-20.43457006 0.65917945L258.875 288.1130177c-7.91015625 3.29589869-12.52441381 9.88769531-15.16113307 17.13867212z"
              fill="#FFAB00"
              p-id="3855"
            ></path>
            <path
              d="M832.36132813 344.80247107H136.26757812v-32.95898464c0-61.96289037 50.097656-112.06054713 112.06054713-112.06054637h111.40136694L639.88085963 75.19797915C655.70117213 67.94700233 674.15820313 67.28782289 690.63769505 73.87961952s29.66308594 18.457031 36.91406276 34.93652368L832.36132813 344.80247107zM175.81835937 305.25168982h595.23925782L691.29687525 124.63645571c-2.6367185-6.59179662-7.91015625-11.20605494-14.50195363-13.84277345-6.59179662-2.6367185-13.84277344-2.6367185-20.43457006 0.65917945L368.29882787 239.33372131H248.32812525c-37.57324219 0-68.55468775 29.0039065-72.50976588 65.91796851z"
              fill="#FFAB00"
              p-id="3856"
            ></path>
            <path
              d="M834.99804662 858.96262732H189.00195338c-29.0039065 0-52.73437525-23.73046875-52.73437525-52.73437526V305.25168982h698.73046849c29.0039065 0 52.73437525 23.73046875 52.73437526 52.73437526v448.24218698c0 29.0039065-23.73046875 52.73437525-52.73437526 52.73437526zM175.81835937 344.80247107v461.42578099c0 7.25097682 5.93261719 13.18359399 13.18359401 13.18359402h645.99609324c7.25097682 0 13.18359399-5.93261719 13.18359401-13.18359402V357.98606508c0-7.25097682-5.93261719-13.18359399-13.18359401-13.18359401H175.81835937z"
              fill="#FFAB00"
              p-id="3857"
            ></path>
            <path
              d="M719.64160156 680.98411171c-30.98144557 0-56.03027318-25.04882838-56.03027318-56.03027319v-79.1015625c0-30.98144557 25.04882838-56.03027318 56.03027318-56.03027395s56.03027318 25.04882838 56.03027319 56.03027395v79.1015625c0 30.98144557-25.04882838 56.03027318-56.03027319 56.03027317z m0-151.61132839c-9.22851588 0-16.47949193 7.25097682-16.47949193 16.4794927v79.1015625c0 9.22851588 7.25097682 16.47949193 16.47949193 16.47949193s16.47949193-7.25097682 16.47949194-16.47949193v-79.1015625c0-9.22851588-7.25097682-16.47949193-16.47949194-16.4794927zM347.47534154 307.70383825l369.36474609-157.28027317 15.49072318 36.38671875-369.35815456 157.28027317z"
              fill="#FFAB00"
              p-id="3858"
            ></path>
          </svg>
        </Avatar>
      );
    } else if (id == "paypal") {
      return (
        <Avatar variant="rounded" sx={{ bgcolor: "#EBEDF0" }} src="">
          <svg
            t="1693549108941"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7144"
            width="20"
            height="20"
          >
            <path
              d="M730.199581 626.003474c-18.614963-56.138578-45.551452-81.230046-88.747254-107.892289-30.166043-18.619056-63.637366-30.137391-97.472985-39.480177V195.299011c61.426001 16.877389 98.949616 66.077951 104.441701 111.942535 2.100848 17.537422 18.013259 30.051433 35.55682 27.950586 17.536398-2.100848 30.05041-18.019399 27.949562-35.556821-5.214768-43.534516-28.493961-86.730317-63.869656-118.51216-29.367865-26.383904-64.836681-43.835368-104.07945-51.468209V96.001471c0-17.662265-14.3181-31.980365-31.980366-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365v29.904077c-50.389644 3.66139-96.100732 23.028483-130.684388 55.769165-37.508265 35.509748-58.862619 83.155908-60.131519 134.160559-2.602268 104.659665 69.306482 175.810145 137.220245 197.627033 17.261129 5.545296 35.593659 10.269901 53.595662 14.775518v299.981189c-78.57559-15.130605-129.365346-74.015737-134.647653-158.814053-1.098008-17.628496-16.271592-31.022551-33.906227-29.930683-17.628496 1.098008-31.028691 16.277732-29.930683 33.906228 3.753487 60.262502 25.628704 112.980167 63.260789 152.454204 34.764781 36.467563 81.18809 59.470463 135.223774 67.246567v34.406624c0 17.662265 14.3181 31.980365 31.980365 31.980366 17.662265 0 31.980365-14.3181 31.980366-31.980366v-31.778774c45.166689-2.641153 81.381495-15.836687 116.176976-41.576931 37.137829-27.472702 68.166519-79.676667 75.455529-126.953413 6.1777-40.053228 4.508687-71.256904-5.411243-101.175307zM445.98754 452.567399c-45.966914-14.767332-94.627171-63.35698-92.842524-135.141909 0.842181-33.865295 15.106046-65.580624 40.163745-89.302909 22.711258-21.50171 52.925397-34.634822 86.711897-38.025035v272.149307c-11.841699-3.068895-23.217794-6.204305-34.033118-9.679454zM672.400177 717.432813c-4.692882 30.435173-26.7789 67.89432-50.281174 85.280292-23.718191 17.544585-47.399543 26.594705-78.138638 28.936029V545.263591c23.087834 7.113001 45.043892 15.650445 63.877843 27.275204 33.009811 20.37505 48.869011 35.104519 61.631686 73.595158 4.691859 14.153348 8.708336 33.69338 2.910283 71.29886z"
              p-id="7145"
              fill="#919EAD"
            ></path>
          </svg>
        </Avatar>
      );
    } else {
      return (
        <Avatar variant="rounded" sx={{ bgcolor: "#FFF1D6" }}>
          <svg
            t="1693547143697"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2525"
            width="20"
            height="20"
          >
            <path
              d="M283.584 160.768l60.330667-60.352 414.186666 414.165333L343.893333 928.768l-60.330666-60.352 353.813333-353.834667z"
              fill="#FFAC02"
              p-id="2526"
            ></path>
          </svg>
        </Avatar>
      );
    }
  };

  const data = [
    {
      id: "line",
      color: "hsl(188, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 30,
        },
        {
          x: "Feb",
          y: 51,
        },
        {
          x: "Mar",
          y: 40,
        },
        {
          x: "Apr",
          y: 80,
        },
        {
          x: "May",
          y: 60,
        },
        {
          x: "Jun",
          y: 100,
        },
      ],
    },
  ];
  const color = {
    line: "#FFAB00",
  };

  const getColor = (bar) => color[bar.id];
  //data list
  const Balances = balanceData?.Balances;
  const lineGraph = balanceData?.lineGraph;
  const percentage = balanceData?.percentage;

  return (
    <div style={{ padding: "1rem 1.5rem", width: "100%", height: "100%" }}>
      <div className="topProductsTitle">
        <div style={{ fontWeight: "500", fontSize: "1.5rem" }}>
          Total Balance
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
            <MenuItem onClick={handleClose}>Last Week</MenuItem>
            <MenuItem onClick={handleClose}>Last Month</MenuItem>
            <MenuItem onClick={handleClose}>Last Year</MenuItem>
          </Menu>
        </Box>
      </div>
      <div className="balanceContainer" style={{}}>
        {Balances?.map((eachItem) => {
          return (
            <div className="balanceBox" style={{ marginRight: "2rem" }}>
              <div>{renderIcon(eachItem?.id)}</div>
              <div style={{ marginLeft: "1rem" }}>
                <div
                  style={{
                    color: "rgba(50, 71, 92, 0.87)",
                    fontSize: "1.25rem",
                  }}
                >
                  ${eachItem?.amount}k
                </div>
                <div
                  style={{
                    color: "rgba(50, 71, 92, 0.6)",
                    fontSize: "0.875rem",
                  }}
                >
                  Wallet
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="balanceBox">
          <Avatar variant="square" sx={{ bgcolor: "#EBEDF0" }} src="">
            aa
          </Avatar>
          <div style={{ marginLeft: "1rem" }}>
            <div
              style={{ color: "rgba(50, 71, 92, 0.87)", fontSize: "1.25rem" }}
            >
              $k
            </div>
            <div
              style={{ color: "rgba(50, 71, 92, 0.6)", fontSize: "0.875rem" }}
            >
              Paypal
            </div>
          </div>
        </div> */}
      </div>
      <div style={{ width: "100%", height: "14rem" }}>
        {lineGraph !== undefined && (
          <ResponsiveLine
            data={lineGraph}
            margin={{ top: 20, right: 10, bottom: 30, left: 30 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 11,
              tickRotation: 0,
              legend: "",
              legendOffset: 7,
              legendPosition: "middle",
            }}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            colors={getColor}
            lineWidth={5}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            isInteractive={false}
            useMesh={true}
            legends={[]}
          />
        )}
      </div>
      <div className="balanceSummary">
        <div className="b_summary">
          <div>You have done {percentage}% more sales.</div>
          <div>Check your new badge in your profile.</div>
        </div>
        <div>{renderIcon()}</div>
      </div>
    </div>
  );
}
