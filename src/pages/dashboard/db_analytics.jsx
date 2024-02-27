import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./scss/db_analytics.css";
import "../../components/header/header.css";
import Header from "../../components/header/header";
import axios from "axios";
import { setAnalysisData } from "../../store/actions/AnalysisAction";

import Overviewcard from "../../components/card/overviewcard/overviewcard";
import Orderchart from "../../components/card/orderchart/orderchart";
import Salescard from "../../components/card/salescard/salescard";
import Totalrevenue from "../../components/card/totalrevenue/totalrevenue";
import PaymentCard from "../../components/card/paymentCard/paymentCard";
import RevenueCard from "../../components/card/revenueCard/revenueCard";
import ProfitReport from "../../components/card/profitReport/profitReport";
import OrderStatistic from "../../components/card/orderStatistics/orderStatistic";
import TabsCard from "../../components/card/tabsCard/tabsCard";
import TransactionCard from "../../components/card/transactionsCard/transactionCard";
import TimelineCard from "../../components/card/timelineCard/timelineCard";

import UserBrowerSystemCountryCard from "../../components/card/userBocCard/UserBscCard";
//mui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DashboardAnalytics() {
  //grid v2
  const theme = useTheme();
  const cardBackgroundColor = "white";
  const subTitleColor = "red";
  const titleColor = "blue";
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px",
  }));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  //Get Data from  Backend Server
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://sneatwebserver.onrender.com/api/v1/dashboards/analytics")
      .then((res) => {
        dispatch(setAnalysisData(res.data));
      })
      .catch((error) => {
        console.log("axios did not get data", error);
      });
  }, []);
  const data = useSelector((state) => {
    return state.TotalRevenueReducer.data;
  });

  const analyticsSalesData = data?.analyticsSales[0];
  const whichPage = data?.page;

  return (
    <div className="componenent">
      <div className="component_css">
        <div className="componentContainer">
          <div className="analytics">
            <Box sx={{ flexGrow: 4, marginTop: "3px" }}>
              <Grid
                container
                display="grid"
                gridTemplateColumns={"repeat(12, 1fr)"}
                gridAutoRows="80px"
                gap={"20px"}
                width="100%"
                maxWidth={"calc(1440px - 3rem)"}
                minWidth={"550px"}
                margin="0 auto"
              >
                <Grid
                  item
                  order={1}
                  gridColumn={"span 12"}
                  sx={{ zIndex: "50" }}
                >
                  <Box
                    sx={{
                      width: "80vw",
                      maxWidth: " calc(1440px - 3rem)",
                      minWidth: "720px",
                      height: "65px",
                      // bgcolor: "orange",
                      position: "fixed",
                      top: "20px",
                      margin: "0 auto",
                    }}
                  >
                    <Header></Header>
                  </Box>
                </Grid>

                <Grid
                  item
                  gridColumn={isSmallScreen ? "span 12" : "span 8"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  order={2}
                  sx={{
                    borderRadius: "5px",
                    boxShadow: "rgba(50, 71, 92, 0.1) 0px 2px 10px 0px",
                    color: "    rgba(50, 71, 92, 0.87)",
                  }}
                >
                  <Box>
                    <Overviewcard />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={3}
                  gridColumn={isSmallScreen ? "span 4" : "span 2"}
                  gridRow={"span 2"}
                  height={"100%"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  overflow={"hidden"}
                  minWidth={"210px"}
                >
                  <Box>
                    <Orderchart />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 5 : 4}
                  gridColumn={isSmallScreen ? "span 4" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <Box>
                    <Salescard
                      salesOrderData={analyticsSalesData}
                      whichPage={whichPage}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 12" : "span 8"}
                  gridRow={"span 4"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"900px"}
                >
                  <Totalrevenue />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 5 : 7}
                  gridColumn={isSmallScreen ? "span 4" : "span 2"}
                  gridRow={"span 2"}
                  height={"100%"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <RevenueCard />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 4 : 6}
                  gridColumn={isSmallScreen ? "span 4" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <Box>
                    <PaymentCard />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 7 : 8}
                  gridColumn={isSmallScreen ? "span 8" : "span 4"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <Box>
                    <ProfitReport />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={10}
                  // order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 6"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={420}
                >
                  <OrderStatistic />
                </Grid>
                <Grid
                  item
                  order={11}
                  // order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 6"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={430}
                >
                  <TabsCard />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={12}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 6"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={420}
                >
                  <TransactionCard />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={13}
                  // gridColumn={isSmallScreen ? "span 5" : "span 6"}
                  gridColumn={"span 6"}
                  gridRow={"span 6"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={420}
                >
                  <TimelineCard />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={14}
                  gridColumn={isSmallScreen ? "span 12" : "span 6"}
                  gridRow={"span 6"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <UserBrowerSystemCountryCard />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
