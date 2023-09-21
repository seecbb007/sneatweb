import React from "react";
import "./salesAnalytics.css";
//mui
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//nivo
import { ResponsiveHeatMap } from "@nivo/heatmap";

export default function SalesAnalytics({ heatChartData }) {
  //dropdown year button
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
  //nivo data

  return (
    <div>
      <div className="sAnalytics">
        <div className="sAnalytics_title">
          <div style={{ fontWeight: "600", fontSize: "1.25rem" }}>
            Earning Report
          </div>
          <div className="dropdown_year">
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
          </div>
        </div>
        <div className="orderS_subtitle">
          <span className="salesPercentage"> +42.6%</span>
          Than last year
        </div>
        <div className="heatchart" style={{ width: "25rem", height: "25rem" }}>
          {heatChartData !== undefined && (
            <ResponsiveHeatMap
              data={heatChartData}
              margin={{ top: 60, right: 0, bottom: 60, left: 30 }}
              valueFormat=" >-.2s"
              axisTop={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendPosition: "middle",
                legendOffset: -1,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: -72,
              }}
              colors={{
                type: "diverging",
                scheme: "purples",
                minValue: -100000,
                maxValue: 100000,
                divergeAt: 0.65,
              }}
              emptyColor="#32475c"
              inactiveOpacity={0.05}
              enableLabels={false}
              legends={[]}
              hoverTarget="cell"
            />
          )}
        </div>
      </div>
    </div>
  );
}
