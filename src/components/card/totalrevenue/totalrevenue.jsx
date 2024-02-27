import React, { useEffect } from "react";
import Stackedbarchart from "./stackedbarchart";
import "./totalrevenue.css";
import Piechart from "./piechart.jsx";
import store from "../../../store/store";
import { setAnalysisData } from "../../../store/actions/AnalysisAction";
import axios from "axios";

//mui
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { connect, useSelector, useDispatch } from "react-redux";

export default function Totalrevenue() {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 720,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // get data from backend and set to redux store
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.TotalRevenueReducer.data;
  });
  //piechart data
  const piedata = useSelector((state) => {
    return state;
  });

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

  const stackedBarChartData = data?.stackedBarData;
  const pieChartData = data?.pieChartData;
  const whichPage = data?.page;

  return (
    <div style={{ padding: "1rem " }}>
      <div className="totalRevenue">
        <div className="revenueBar">
          <div className="revenueBar_title">Total Revenue</div>
          {stackedBarChartData !== undefined && whichPage !== undefined && (
            <Stackedbarchart data={stackedBarChartData} whichPage={whichPage} />
          )}
        </div>
        <div className="revenueGrowth">
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              border: "1px solid #696CFF",
              color: "#696CFF",
              backgroundColor: "white",
              ":hover": {
                bgcolor: "#F9F9FF",
                border: "1px solid rgba(105, 108, 255,1)",
                transform: "translateY(-1px)",
              },
            }}
          >
            2023
          </Button>
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            // sx={{ width: "100px" }}
          >
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ width: "90px" }}
            >
              2022
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              2021
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              2020
            </MenuItem>
          </Menu>
          {pieChartData !== undefined && <Piechart data={pieChartData} />}
        </div>
      </div>
    </div>
  );
}
