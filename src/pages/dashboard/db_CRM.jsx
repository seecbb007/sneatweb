import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCrmData } from "../../store/actions/crmAction";
import axios from "axios";
import "./scss/db_analytics.css";
import "../../components/header/header.css";
import Header from "../../components/header/header";

//compnents
import UserRating from "../../components/crmCard/userRating/userRating";
import OverviewActivity from "../../components/crmCard/overviewActivity/overviewActivity";
import Orderchart from "../../components/card/orderchart/orderchart";
import Salescard from "../../components/card/salescard/salescard";
import Leads from "../../components/crmCard/leads/leads";
import TopProducts from "../../components/crmCard/topProducts/topProducts";
import EarningReport from "../../components/crmCard/earningReport/earningReport";
import SalesAnalytics from "../../components/crmCard/sAnalytics/salesAnalytics";
import SalesCountries from "../../components/crmCard/sCountries/salesCountries";
import SStats from "../../components/crmCard/sStats/sStats";
import TableTeamMembers from "../../components/crmCard/table_teammembers/tableTeamMembers";
import TableDetail from "../../components/crmCard/table/tableDetail";

//mui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DashboardAnalytics() {
  //Get Data from  Backend Server
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://sneatwebserver.onrender.com/api/v1/dashboards/crm")
      .then((res) => {
        dispatch(setCrmData(res.data));
      })
      .catch((error) => {
        console.log("axios did not get data from CRM", error);
      });
  }, []);

  //Get Data from  main db_CRM Backend data
  const data = useSelector((state) => {
    return state.crmReducer.data;
  });

  const orderData = data?.crmOrder[0];
  const whichPage = data?.page;
  const pieChartData = data?.pieChartData;
  const leadsData = data?.leads[0];

  const topProducts = data?.topSalesVolume;

  const earningReportData = data?.earningReport;
  const barChartData = data?.revenueBarData;
  const heatChartData = data?.heat;
  const countryData = data?.salesCountry;
  const tableTeamData = data?.teamMembers;
  const tableCustomerData = data?.tableCustomers;

  //grid v2
  const theme = useTheme();
  const cardBackgroundColor = "white";

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "5px",
  }));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

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
                  order={2}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  sx={{
                    borderRadius: "5px",
                    boxShadow: "rgba(50, 71, 92, 0.1) 0px 2px 10px 0px",
                    color: "    rgba(50, 71, 92, 0.87)",
                  }}
                  minWidth={"450px"}
                >
                  <Box>
                    <UserRating />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={3}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  height={"100%"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  overflow={"hidden"}
                  minWidth={"450px"}
                >
                  <Box>
                    <OverviewActivity />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 5 : 4}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <Orderchart />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 5 : 4}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <Salescard salesOrderData={orderData} whichPage={whichPage} />
                </Grid>
                <Grid
                  item
                  order={5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={isSmallScreen ? "span 2" : "span 3"}
                  // height={isSmallScreen ? "15rem" : "17.5rem"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  // minWidth={"210px"}

                  display={"flex"}
                  align="center"
                >
                  <Leads pieData={pieChartData} leadsData={leadsData} />
                </Grid>
                <Grid
                  item
                  order={6}
                  gridColumn={isSmallScreen ? "span 12" : "span 8"}
                  gridRow={"span 4"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <TopProducts topProducts={topProducts} />
                </Grid>
                <Grid
                  item
                  order={7}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={isSmallScreen ? "span 5" : "span 4"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <EarningReport
                    earningData={earningReportData}
                    barChartData={barChartData}
                  />
                </Grid>
                <Grid
                  item
                  order={8}
                  // order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  // minWidth={440}
                >
                  <SalesAnalytics heatChartData={heatChartData} />
                </Grid>
                <Grid
                  item
                  order={9}
                  // order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <SalesCountries countryData={countryData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={10}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <SStats />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={13}
                  //  gridColumn={isSmallScreen ? "span 5" : "span 5"}
                  gridColumn={"span 5"}
                  gridRow={"span 4"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <TableTeamMembers tableTeamData={tableTeamData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={14}
                  gridColumn={"span 7"}
                  // gridColumn={isSmallScreen ? "span 6" : "span 7"}
                  gridRow={"span 4"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <TableDetail tableCustomerData={tableCustomerData} />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
