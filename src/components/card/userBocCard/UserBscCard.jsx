import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnalysisData } from "../../../store/actions/AnalysisAction";
import axios from "axios";
//mui table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//mui basic tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//mui progress
import { styled } from "@mui/material/styles";

import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
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

export default function UserBrowerSystemCountryCard() {
  const [value, setValue] = React.useState(0);
  const [tableIndex, setTableIndex] = useState(0);
  const [isActive, setIsActive] = useState("BROWER");
  const handleChange = (event, newValue) => {
    setTableIndex(Number(newValue));
    setValue(newValue);
  };

  //mui linearprogress
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    width: 100,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#696CFF" : "#308fe8",
    },
  }));
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

  const [currentBscData, setCurrentBscData] = useState([]);

  useEffect(() => {
    setCurrentBscData(data?.bscUserData[tableIndex]);
  }, [data, tableIndex]);

  const renderTable = (data) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#8E9AA5" }}>NO.</TableCell>
              <TableCell sx={{ color: "#8E9AA5" }} align="left">
                {data?.bscType}
              </TableCell>
              <TableCell sx={{ color: "#8E9AA5" }} align="left">
                VISITS
              </TableCell>
              <TableCell sx={{ color: "#8E9AA5" }} align="left">
                DATA IN PERCENTAGE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{}}>
            {data?.tabledata?.map((row) => (
              <TableRow
                key={row}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: "#8E9AA5" }}>
                  {row.number}
                </TableCell>
                <TableCell
                  // align="left"
                  sx={{
                    width: "10rem",
                    height: "100%",
                    color: "#8E9AA5",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-Start",
                      color: "#8E9AA5",
                    }}
                  >
                    <img
                      src={row.brower.browericonUrl}
                      style={{
                        width: "2rem",
                        height: "2rem",

                        marginRight: "1.3rem",
                      }}
                    ></img>
                    <div style={{ width: "5rem", color: "#8E9AA5" }}>
                      {row.brower.browername}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{row.visits}</TableCell>
                <TableCell
                  sx={{
                    alignItems: "center",
                    height: "4.3rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-Start",
                    }}
                  >
                    <BorderLinearProgress
                      variant="determinate"
                      value={row.datapercentage}
                    />
                    <div
                      style={{
                        marginLeft: "1.2rem",
                      }}
                    >
                      {row.datapercentage}%
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <div>
      <div className="userTabsBoc">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="none"
              color="#8E9AA5"
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#696CFF",
                  color: "white",
                  borderRadius: "0.5rem ",
                },
                padding: "1rem 2rem 1rem 2rem",
              }}
            >
              <Tab
                label="BROWER"
                {...a11yProps(0)}
                // sx={{
                //   color: isActive === "BROWER" ? "white" : "black",
                //   backgroundColor: isActive === "BROWER" ? "#696CFF" : "",
                // }}
                // onClick={() => setIsActive("BROWER")}
              ></Tab>
              <Tab
                label="OPERATING SYSTEM"
                // onClick={() => setIsActive("OPERATING SYSTEM")}
                {...a11yProps(1)}
              />
              <Tab label="COUNTRY" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {renderTable(currentBscData)}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {renderTable(currentBscData)}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {renderTable(currentBscData)}
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
