import React from "react";
import payPalIcon from "../../../asset/paypal.png";
import "../salescard/salescard.css";
//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function PaymentCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="salesCard">
      <div className="salescard_wallet">
        <img src={payPalIcon} style={{ width: "42px", height: "42px" }}></img>
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
      <div className="salescard_title">Payments</div>
      <div className="salescard_amount">$2,468</div>
      <div className="salescard_percentageContainer">
        <svg
          t="1692488760857"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4862"
          width="20"
          height="20"
        >
          <path
            d="M514.56 806.4c-8.96 0-16-7.04-16-16v-577.28c0-8.96 7.04-16 16-16s16 7.04 16 16v577.28c0 8.96-7.04 16-16 16z"
            fill="#FF3E1D"
            p-id="4863"
          ></path>
          <path
            d="M514.56 806.4c-4.48 0-9.6-1.92-12.8-6.4-5.76-7.04-4.48-17.28 2.56-22.4l290.56-229.12c7.04-5.76 17.28-4.48 22.4 2.56 5.76 7.04 4.48 17.28-2.56 22.4l-290.56 229.12c-2.56 2.56-6.4 3.84-9.6 3.84z"
            fill="#FF3E1D"
            p-id="4864"
          ></path>
          <path
            d="M513.28 806.4c-3.2 0-7.04-1.28-10.24-3.2l-288-229.12c-7.04-5.76-8.32-15.36-2.56-22.4s15.36-8.32 22.4-2.56l288 229.12c7.04 5.76 8.32 15.36 2.56 22.4-2.56 3.84-7.04 5.76-12.16 5.76z"
            fill="#FF3E1D"
            p-id="4865"
          ></path>
        </svg>
        <div className="salescard_percentage" style={{ color: "#FF4424" }}>
          {" "}
          28.14%
        </div>
      </div>
    </div>
  );
}
