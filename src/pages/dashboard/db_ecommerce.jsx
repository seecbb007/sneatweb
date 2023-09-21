import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEcommerceData } from "../../store/actions/ecommerceActions";
import axios from "axios";
import "./scss/db_analytics.css";
import "../../components/header/header.css";
import Header from "../../components/header/header";

//mui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//Components
import AwardCard from "../../components/ecommerceCard/awardCard/awardCard";
import VisitorsCard from "../../components/ecommerceCard/visitorsCard/visitorsCard";
import Salescard from "../../components/card/salescard/salescard";
import ProfitCard from "../../components/ecommerceCard/profitCard/profitCard";
import ExpensesCard from "../../components/ecommerceCard/expensesCard/expensesCard";
import TotalIncome from "../../components/ecommerceCard/totalIncome/totalIncome";
import PerformanceRadar from "../../components/ecommerceCard/performanceRadar/performanceRadar";
import ConversionCard from "../../components/ecommerceCard/conversionCard/conversionCard";
import SalesProgressCard from "../../components/ecommerceCard/salesProgressCard/salesProgressCard";
import ExpensesChartCard from "../../components/ecommerceCard/expensesChartCard/expensesChartCard";
import ProductDisplay from "../../components/ecommerceCard/productDisplay/productDisplay";
import TotalBalance from "../../components/ecommerceCard/totalBalance/totalBalance";

export default function DashboardEcommerce() {
  //Get Data from  Backend Server
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://sneatwebserver.onrender.com/api/v1/dashboards/ecommerce")
      .then((res) => {
        dispatch(setEcommerceData(res.data));
      })
      .catch((error) => {
        console.log("axios did not get data from ECOMMERCE", error);
      });
  }, []);
  //Get Data from  main db_CRM Backend data
  const data = useSelector((state) => {
    return state.ecommerceReducer.data;
  });

  const type = data?.type;
  const bestSeller = data?.bestSeller;
  const visitorsActivityData = data?.visitorsActivity;
  const salesCardData = data?.analyticsSales[0];
  const transactionCardData = data?.transactionCard[0];
  const revenueCardData = data?.revenueCard[0];
  const reportIepData = data?.reportIep;
  const conversionData = data?.conversionRate;
  const stackedBarData = data?.stackedBarData;
  const productDisplayData = data?.phoneProductData;
  const balanceData = data?.balanceData;

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
                  gridColumn={isSmallScreen ? "span 12" : "span 4"}
                  gridRow={"span 3"}
                  bgcolor={cardBackgroundColor}
                  sx={{
                    borderRadius: "5px",
                    boxShadow: "rgba(50, 71, 92, 0.1) 0px 2px 10px 0px",
                    color: "    rgba(50, 71, 92, 0.87)",
                  }}
                  minWidth={"450px"}
                >
                  <Box>
                    <AwardCard bestSeller={bestSeller} />
                  </Box>
                </Grid>
                <Grid
                  item
                  order={3}
                  gridColumn={isSmallScreen ? "span 12" : "span 8"}
                  gridRow={"span 3"}
                  height={"100%"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  overflow={"hidden"}
                  minWidth={"450px"}
                >
                  <VisitorsCard visitorsAData={visitorsActivityData} />
                </Grid>
                <Grid
                  item
                  order={4}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <Salescard salesOrderData={salesCardData} />
                </Grid>
                <Grid
                  item
                  order={5}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <ProfitCard />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 8 : 6}
                  gridColumn={isSmallScreen ? "span 12" : "span 8"}
                  gridRow={"span 4"}
                  height={"100%"}
                  // height={isSmallScreen ? "15rem" : "17.5rem"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"47.75rem"}
                  // display={"flex"}
                  // align="center"
                >
                  <TotalIncome reportIepData={reportIepData} />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 6 : 8}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                  minWidth={"210px"}
                >
                  <ExpensesCard />
                </Grid>
                <Grid
                  item
                  order={isSmallScreen ? 7 : 9}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <Salescard salesOrderData={transactionCardData} />
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
                  // minWidth={440}
                >
                  <PerformanceRadar />
                </Grid>
                <Grid
                  item
                  order={10}
                  // order={isSmallScreen ? 8 : 5}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <ConversionCard conversionData={conversionData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={11}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <Salescard salesOrderData={revenueCardData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={12}
                  //  gridColumn={isSmallScreen ? "span 5" : "span 5"}
                  gridColumn={isSmallScreen ? "span 3" : "span 2"}
                  gridRow={"span 2"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <SalesProgressCard />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={13}
                  gridColumn={isSmallScreen ? "span 6" : "span 4"}
                  gridRow={isSmallScreen ? "span 2" : "span 3"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <ExpensesChartCard stackedBarData={stackedBarData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={14}
                  gridColumn={"span 8"}
                  // gridColumn={isSmallScreen ? "span 6" : "span 7"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <ProductDisplay productDisplayData={productDisplayData} />
                </Grid>
                <Grid
                  item
                  // order={isSmallScreen ? 8 : 5}
                  order={14}
                  gridColumn={"span 4"}
                  // gridColumn={isSmallScreen ? "span 6" : "span 7"}
                  gridRow={"span 5"}
                  bgcolor={cardBackgroundColor}
                  borderRadius={"5px"}
                  boxShadow={"rgba(50, 71, 92, 0.1) 0px 2px 10px 0px"}
                  color={"rgba(50, 71, 92, 0.87)"}
                >
                  <TotalBalance balanceData={balanceData} />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
