import React from "react";
import "./tabsCard.css";
//icon
import walletPurple from "../../../asset/walletPurple.png";
import paypal from "../../../asset/paypal.png";
import totalProfiticon from "../../../asset/totalProfiticon.png";

//mui Forced scroll buttons
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

//nivo
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabsCard(props) {
  const data = [
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
  const pieData = [
    {
      id: "java",
      label: "java",
      value: 259,
    },

    {
      id: "elixir",
      label: "elixir",
      value: 60,
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colors = {
    series1: "#696CFF",
    java: "#7A7CFF",
    elixir: "#EBEEF0",
  };

  const getColor = (bar) => colors[bar.id];
  return (
    <div>
      <div className="tabsCard">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              maxWidth: { xs: 200, sm: 280 },
              bgcolor: "background.paper",
              marginBottom: "1.5rem",

              margin: "0 auto",
              width: "100%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="INCOME" {...a11yProps(0)} />
              <Tab label="EXPENSES" {...a11yProps(1)} />
              <Tab label="PROFIT" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Divider></Divider>
          <CustomTabPanel value={value} index={0}>
            <div className="tabPanelContainer">
              <div className="tabPanelContainer_content">
                <div className="panelIcon">
                  <img
                    src={walletPurple}
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                </div>
                <div className="content_info">
                  <div style={{ fontSize: "1.3rem" }}>Total Income</div>
                  <div>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        color: "#5B6B7C",
                        marginRight: "15px",
                      }}
                    >
                      $459.1k
                    </span>
                    <span
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <svg
                        t="1692573247882"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4014"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667"
                          fill="#83E150"
                          p-id="4015"
                        ></path>
                      </svg>
                    </span>
                    <span
                      style={{
                        color: "#83E150",
                      }}
                    >
                      42.9%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tabPanelContainer_graph"
                style={{ height: "10rem", width: "100%", margin: "2rem 0" }}
              >
                <ResponsiveLine
                  data={data}
                  margin={{ top: 0, right: 10, bottom: 30, left: 20 }}
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
                  colors={getColor}
                  lineWidth={3}
                  enablePoints={false}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={3}
                  pointBorderColor={{ from: "serieColor", modifiers: [] }}
                  pointLabelYOffset={-15}
                  useMesh={true}
                  legends={[]}
                />
              </div>
              <div className="tabPanelContainer_details">
                <div
                  className="tabPanel_details_graph"
                  style={{ height: "10rem", width: "50%" }}
                >
                  <ResponsivePie
                    data={pieData}
                    // wid={300}
                    colors={getColor}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    innerRadius={0.5}
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
                    legends={[]}
                  />
                </div>
                <Box
                  position="absolute"
                  top="40%"
                  left="15%"
                  color="grey"
                  textAlign="center"
                  width={80}
                  height={80}
                  transition={"all 2s ease-out"}
                >
                  <Typography variant="h6">6.5k</Typography>
                </Box>
                <div className="tabPanel_details_info">
                  <div
                    style={{
                      fontSize: "1.1rem",
                      color: "#5B6B7C",
                    }}
                  >
                    Income this week
                  </div>
                  <div
                    style={{
                      color: "#F8F9F9;",
                      marginRight: "15px",
                    }}
                  >
                    $39k less than last week
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="tabPanelContainer">
              <div className="tabPanelContainer_content">
                <div className="panelIcon">
                  <img
                    src={paypal}
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                </div>
                <div className="content_info">
                  <div style={{ fontSize: "1.3rem" }}>Total Expenses</div>
                  <div>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        color: "#5B6B7C",
                        marginRight: "15px",
                      }}
                    >
                      $316.5k
                    </span>
                    <span
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <svg
                        t="1692573247882"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4014"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667"
                          fill="#83E150"
                          p-id="4015"
                        ></path>
                      </svg>
                    </span>
                    <span
                      style={{
                        color: "#83E150",
                      }}
                    >
                      27.8%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tabPanelContainer_graph"
                style={{ height: "10rem", width: "100%", margin: "2rem 0" }}
              >
                <ResponsiveLine
                  data={data}
                  margin={{ top: 0, right: 10, bottom: 30, left: 20 }}
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
                  colors={getColor}
                  lineWidth={3}
                  enablePoints={false}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={3}
                  pointBorderColor={{ from: "serieColor", modifiers: [] }}
                  pointLabelYOffset={-15}
                  useMesh={true}
                  legends={[]}
                />
              </div>
              <div className="tabPanelContainer_details">
                <div
                  className="tabPanel_details_graph"
                  style={{ height: "10rem", width: "50%" }}
                >
                  <ResponsivePie
                    data={pieData}
                    // wid={300}
                    colors={getColor}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    innerRadius={0.5}
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
                    legends={[]}
                  />
                </div>
                <Box
                  position="absolute"
                  top="40%"
                  left="15%"
                  color="grey"
                  textAlign="center"
                  width={80}
                  height={80}
                  transition={"all 2s ease-out"}
                >
                  <Typography variant="h6">7.2k</Typography>
                </Box>
                <div className="tabPanel_details_info">
                  <div
                    style={{
                      fontSize: "1.1rem",
                      color: "#5B6B7C",
                    }}
                  >
                    Expenses this week
                  </div>
                  <div
                    style={{
                      color: "#F8F9F9;",
                      marginRight: "15px",
                    }}
                  >
                    $16k less than last week
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="tabPanelContainer">
              <div className="tabPanelContainer_content">
                <div className="panelIcon">
                  <img
                    src={totalProfiticon}
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                </div>
                <div className="content_info">
                  <div style={{ fontSize: "1.3rem" }}>Total Profit</div>
                  <div>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        color: "#5B6B7C",
                        marginRight: "15px",
                      }}
                    >
                      $147.9k
                    </span>
                    <span
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <svg
                        t="1692573247882"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4014"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M511.965867 256c-3.456-0.042667-6.741333 0.554667-10.112 1.322667-1.450667 0.341333-2.858667 0.554667-4.266667 1.066666-6.954667 2.304-13.525333 5.717333-18.688 11.477334l-382.762667 427.178666a42.461867 42.461867 0 0 0 3.754667 60.288c17.834667 15.573333 45.312 13.909333 61.098667-3.712l350.976-391.722666 351.061333 391.722666c15.786667 17.621333 43.264 19.285333 61.098667 3.712a42.461867 42.461867 0 0 0 3.754666-60.288L545.024 269.866667c-5.162667-5.76-11.733333-9.173333-18.688-11.477334-1.408-0.512-2.816-0.725333-4.266667-1.066666-3.370667-0.768-6.656-1.365333-10.112-1.322667"
                          fill="#83E150"
                          p-id="4015"
                        ></path>
                      </svg>
                    </span>
                    <span
                      style={{
                        color: "#83E150",
                      }}
                    >
                      35.1%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tabPanelContainer_graph"
                style={{ height: "10rem", width: "100%", margin: "2rem 0" }}
              >
                <ResponsiveLine
                  data={data}
                  margin={{ top: 0, right: 10, bottom: 30, left: 20 }}
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
                  colors={getColor}
                  lineWidth={3}
                  enablePoints={false}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={3}
                  pointBorderColor={{ from: "serieColor", modifiers: [] }}
                  pointLabelYOffset={-15}
                  useMesh={true}
                  legends={[]}
                />
              </div>
              <div className="tabPanelContainer_details">
                <div
                  className="tabPanel_details_graph"
                  style={{ height: "10rem", width: "50%" }}
                >
                  <ResponsivePie
                    data={pieData}
                    // wid={300}
                    colors={getColor}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    innerRadius={0.5}
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
                    legends={[]}
                  />
                </div>
                <Box
                  position="absolute"
                  top="40%"
                  left="15%"
                  color="grey"
                  textAlign="center"
                  width={80}
                  height={80}
                  transition={"all 2s ease-out"}
                >
                  <Typography variant="h6">4.2k</Typography>
                </Box>
                <div className="tabPanel_details_info">
                  <div
                    style={{
                      fontSize: "1.1rem",
                      color: "#5B6B7C",
                    }}
                  >
                    Profit this week
                  </div>
                  <div
                    style={{
                      color: "#F8F9F9;",
                      marginRight: "15px",
                    }}
                  >
                    $28k less than last week
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
