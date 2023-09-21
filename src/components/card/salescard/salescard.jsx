import React, { useEffect, useState } from "react";
import wallet from "../../../asset/wallet.png";
import "./salescard.css";
import { useSelector } from "react-redux";
//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Salescard({ salesOrderData, whichPage }) {
  const [currentArrow, setCurrentArrow] = useState("");
  const [currentPercentageColor, setCurrentPercentageColor] = useState("");
  const [currentImg, setCurrentImg] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const growth = salesOrderData?.growth;
  const picIcon = salesOrderData?.picIcon;
  // useEffect(() => {
  //   if (whichPage === "analytics") {
  //     setCurrentImg(picIcon);
  //   }else if (whichPage === "crm") {
  //     setCurrentImg();
  //   }
  // }, [whichPage]);

  useEffect(() => {
    if (growth === "positive") {
      setCurrentArrow(
        <svg
          t="1692077567231"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4014"
          width="20"
          height="20"
        >
          <path
            d="M542.08 429.44V672a32 32 0 0 1-64 0v-242.56l-105.28 105.28a32 32 0 0 1-45.12-45.12l156.8-156.8a31.936 31.936 0 0 1 49.92-1.6l158.4 158.4a32 32 0 0 1-45.44 45.12l-105.28-105.28z"
            fill="#71DD37"
            p-id="4015"
          ></path>
        </svg>
      );
      setCurrentPercentageColor("#71DD37");
    } else {
      setCurrentArrow(
        <svg
          t="1693080331102"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8485"
          width="20"
          height="20"
        >
          <path
            d="M755.626667 481.706667a42.666667 42.666667 0 0 0-60.586667 0L554.666667 622.506667V298.666667a42.666667 42.666667 0 0 0-85.333334 0v323.84l-140.373333-140.8a42.666667 42.666667 0 0 0-60.586667 60.586666l213.333334 213.333334a42.666667 42.666667 0 0 0 14.08 8.96 40.106667 40.106667 0 0 0 32.426666 0 42.666667 42.666667 0 0 0 14.08-8.96l213.333334-213.333334a42.666667 42.666667 0 0 0 0-60.586666z"
            p-id="8486"
            fill="#FF5C40"
          ></path>
        </svg>
      );
      setCurrentPercentageColor("#FF5C40");
    }
  }, [growth]);

  return (
    <div className="salesCard">
      <div className="salescard_wallet">
        <img src={picIcon} style={{ width: "42px", height: "42px" }}></img>
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

      <div className="salescard_title">{salesOrderData?.title}</div>
      <div className="salescard_amount">{salesOrderData?.amount}</div>
      <div className="salescard_percentageContainer">
        {currentArrow}
        <div
          className="salescard_percentage"
          style={{ color: currentPercentageColor }}
        >
          {salesOrderData?.percentage}%
        </div>
      </div>
    </div>
  );
}

// svg arrown down red
{
  /*  */
}
