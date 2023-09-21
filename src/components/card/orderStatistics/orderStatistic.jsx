import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnalysisData } from "../../../store/actions/AnalysisAction";
import axios from "axios";
import "./orderStatistic.css";
//nivo
import { ResponsivePie } from "@nivo/pie";

//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui inset divider
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

export default function OrderStatistic() {
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

  //change chart color
  const colors = {
    Decor: "#03C3EC",
    Fashion: "#71DD37",
    Sport: "#8592A3",
    Electronic: "#696CFF",
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
  const orderStatisData = data?.orderStatisPieData;

  const handlePieMouseEnter = (target) => {
    setPieDisplayInfo({
      percentage: target.data.value + "%",
      label: target.data.label,
    });
  };

  const handlePieMouseLeave = () => {
    setPieDisplayInfo({
      percentage: 38 + "%",
      label: "Weekly",
    });
  };
  return (
    <div>
      <div className="orderStatisticCard">
        <div className="orderS_title">
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Order Statistic
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
        <div className="orderS_subtitle">42.82k Total Sales</div>
        <div className="orderS_totalOrder">
          <div
            className="os_totalOrder_amount"
            style={{ position: "relative" }}
          >
            <div className="os_totalOrder_amount_content">
              <div style={{ fontWeight: "700", fontSize: "1.9rem" }}>8,258</div>
              <div style={{ fontWeight: "500", color: "grey" }}>
                Total Orders
              </div>
            </div>
            <div
              className="os_totalOrder_graph"
              style={{
                width: "40%",
                height: "10rem",
                // backgroundColor: "red",
                // margin: "0 7rem 0 7rem",
                // backgroundColor: "yellow",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              {orderStatisData !== undefined && (
                <ResponsivePie
                  // width={150}
                  data={orderStatisData}
                  margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
                  innerRadius={0.85}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  onMouseEnter={(target) => handlePieMouseEnter(target)}
                  onMouseLeave={() => handlePieMouseLeave()}
                  colors={getColor}
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
                  animate={false}
                  legends={[]}
                />
              )}
            </div>

            <Box
              position="absolute"
              top="28%"
              left="68%"
              color="grey"
              textAlign="center"
              width={80}
              height={80}
              sx={{}}
            >
              <Typography variant="h6" paddingLeft="10px">
                {pieDisplayInfo.percentage}
              </Typography>
              <Typography variant="h6">{pieDisplayInfo.label}</Typography>
            </Box>
          </div>
        </div>
        <div className="orderS_list">
          <List
            sx={{
              width: "100%",

              bgcolor: "background.paper",
              // bgcolor: "red",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E7E7FF" }}>
                  <svg
                    t="1692508890919"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4413"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
                      fill="#696CFF"
                      p-id="4414"
                    ></path>
                    <path
                      d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
                      fill="#696CFF"
                      p-id="4415"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Electronic"
                secondary="Mobile, Earbuds, TV"
                sx={{ width: "100%" }}
              />
              <ListItemText>82.5k</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E8FADF" }}>
                  <svg
                    t="1692509403368"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5641"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M474.24 428.8a32 32 0 0 1 31.36-38.4c38.88 0 70.4-31.52 70.4-70.4s-31.52-70.4-70.4-70.4-70.4 31.52-70.4 70.4a32 32 0 0 1-64 0c0-74.2272 60.1728-134.4 134.4-134.4s134.4 60.1728 134.4 134.4c0 63.2-43.6224 116.2112-102.4 130.5664v21.8496l445.9008 263.6736a32 32 0 0 1-16.288 59.5456H51.2a32 32 0 0 1-16.288-59.5456L473.6 476.672V435.2c0-2.1888 0.2176-4.3328 0.64-6.4z m32.96 102.3616L168.192 731.6352h682.048l-339.616-200.832a32.1216 32.1216 0 0 1-3.4112 0.3584z"
                      fill="#71DD37"
                      p-id="5642"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Fashion"
                secondary="Tshirt, Jeans, Shoes"
                sx={{ width: "100%" }}
              />
              <ListItemText>23.8k</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#D6F5FC" }}>
                  <svg
                    t="1692509626359"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6948"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M640 896h192V469.376h42.666667V896.213333c0 23.466667-19.029333 42.474667-42.666667 42.474667H597.333333V725.333333h-170.666666v213.333334H192c-23.573333 0-42.666667-18.986667-42.666667-42.453334V469.354667h42.666667V896h192V682.666667h256v213.333333z"
                      fill="#03C3EC"
                      p-id="6949"
                    ></path>
                    <path
                      d="M100.032 506.133333a21.333333 21.333333 0 1 1-29.397333-30.933333L466.282667 99.349333a66.688 66.688 0 0 1 91.434666 0L953.386667 475.2a21.333333 21.333333 0 1 1-29.397334 30.933333L528.341333 130.282667a24.021333 24.021333 0 0 0-32.682666 0L100.053333 506.133333zM832 192h-128a21.333333 21.333333 0 0 1 0-42.666667h149.333333a21.333333 21.333333 0 0 1 21.333334 21.333334v149.333333a21.333333 21.333333 0 0 1-42.666667 0V192z"
                      fill="#03C3EC"
                      p-id="6950"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Decor"
                secondary="Fine Art, Dining"
                sx={{ width: "100%" }}
              />
              <ListItemText>849k</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#EBEDF0" }}>
                  <svg
                    t="1692509772991"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8426"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M936.96 757.333333c5.12-8.96 9.813333-17.92 14.293333-27.093333l2.773334-5.546667q5.973333-12.586667 11.306666-25.173333v-2.133333a491.946667 491.946667 0 0 0-58.666666-476.586667 486.4 486.4 0 0 0-67.626667-74.453333 487.893333 487.893333 0 0 0-39.04-31.36 493.653333 493.653333 0 0 0-42.666667-27.52c-11.306667-6.4-23.04-12.373333-34.986666-18.133334l-15.573334-7.253333-9.813333-3.84A486.4 486.4 0 0 0 384 38.186667c-11.733333 3.2-23.253333 7.253333-34.773333 11.093333h-1.066667c-9.813333 3.413333-19.626667 7.253333-29.226667 11.52L311.466667 64c-9.6 4.266667-18.986667 8.746667-28.373334 13.653333l-4.053333 2.346667a484.053333 484.053333 0 0 0-81.28 55.68l-9.386667 7.893333c-6.826667 5.973333-13.653333 12.16-20.053333 18.773334l-9.813333 10.026666a488.96 488.96 0 0 0-36.053334 42.666667l-4.906666 6.186667a497.706667 497.706667 0 0 0-30.506667 45.44 490.666667 490.666667 0 0 0-39.04 403.413333l2.773333 7.68c3.413333 9.813333 7.253333 19.413333 11.306667 28.8l3.413333 7.466667q5.12 11.52 10.88 22.613333l4.266667 8.533333q7.466667 13.653333 15.573333 26.88l3.84 5.973334q8.32 13.013333 17.493334 25.386666l1.28 1.706667a489.6 489.6 0 0 0 239.573333 172.8l5.12 1.493333c9.386667 2.986667 18.56 5.76 27.946667 8.106667l13.013333 2.986667 21.333333 4.266666 15.36 2.56 19.84 2.346667 15.36 1.493333h36.266667c11.306667 0 22.613333 0 33.706667-1.28h7.893333q15.36-1.28 30.72-3.626666h5.12a490.666667 490.666667 0 0 0 318.72-196.266667l1.28-1.493333 4.693333-7.04 6.4-9.386667c5.76-8.32 10.88-16.426667 15.786667-24.746667zM934.4 661.333333c-3.84 11.093333-7.893333 21.333333-12.8 32.64l-2.773333 5.973334c-5.76 12.373333-11.946667 24.746667-18.773334 36.693333L861.013333 618.666667l97.066667-70.4v4.906666c0 10.24-2.133333 21.333333-3.84 30.293334 0 5.76-1.92 11.52-2.986667 17.28s-2.56 12.16-4.053333 18.133333c-2.346667 9.6-4.906667 19.413333-8.106667 29.013333-1.706667 4.053333-3.2 8.106667-4.693333 13.44z m-201.386667-116.48L661.333333 325.973333l53.546667-71.466666h162.346667A450.133333 450.133333 0 0 1 960 494.506667l-128 91.946666zM597.333333 951.253333l-18.346666 3.2c-9.6 1.493333-19.413333 2.56-29.226667 3.413334h-9.173333q-18.56 1.28-37.12 0h-6.4c-13.226667 0-26.24-1.28-39.466667-2.986667h-2.986667c-13.653333-1.706667-27.093333-4.053333-40.746666-7.04l98.133333-69.973333 97.28 70.613333z m-85.333333-272.64l-177.706667-129.066666L402.133333 341.333333h219.733334l67.84 209.066667z m224-554.666666c12.16 7.04 23.68 14.506667 34.773333 22.4l10.24 7.68q11.52 8.533333 21.333334 17.706666l10.88 9.6c6.826667 6.186667 13.226667 12.586667 19.626666 19.2 3.2 3.2 6.4 6.4 9.386667 9.6l1.28 1.493334h-129.066667l-37.76-115.84a431.36 431.36 0 0 1 59.306667 28.373333zM396.16 79.36A450.346667 450.346667 0 0 1 512 64a442.24 442.24 0 0 1 113.493333 14.933333l51.626667 155.733334-47.146667 64H391.893333l-65.493333-66.346667 47.36-145.92c7.466667-2.346667 14.72-5.12 22.4-7.04zM322.56 106.666667l-34.346667 105.386666H179.626667A443.52 443.52 0 0 1 322.56 106.666667z m-198.4 181.333333c6.613333-11.52 13.866667-22.613333 21.333333-33.28h142.933334l72.96 72.96-71.253334 219.52-101.76 58.24L64 515.626667A444.586667 444.586667 0 0 1 124.16 288zM121.6 730.453333c-4.48-7.893333-8.96-15.786667-12.8-23.893333s-5.12-12.16-7.893333-18.133333-6.826667-15.573333-9.6-23.466667-3.413333-10.88-5.12-16.213333c-2.986667-9.173333-5.76-18.56-8.106667-27.946667 0-4.053333-1.706667-8.106667-2.56-12.16-2.56-11.306667-4.693333-22.613333-6.186667-34.133333v-2.773334L162.986667 640l-33.92 104.106667c-2.56-4.48-4.906667-9.173333-7.466667-13.653334z m38.186667 57.813334l46.933333-144.213334 103.68-59.306666L490.666667 715.733333v124.8l-128 93.226667a439.04 439.04 0 0 1-202.453334-145.706667zM661.333333 933.76l-128-93.226667v-124.8l182.826667-132.693333 102.826667 43.946667 50.346666 154.666666A445.866667 445.866667 0 0 1 661.333333 933.76z"
                      p-id="8427"
                      fill="#8592A3"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Sports"
                secondary="Football, Cricket Kit"
                sx={{ width: "100%" }}
              />
              <ListItemText>99k</ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
