import React from "react";

//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//mui inset list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export default function SalesCountries({ countryData }) {
  //dropdown dots
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const growth = (growthRate, percentage) => {
    return (
      <>
        {growthRate === "positive" ? (
          <>
            <svg
              t="1693200171895"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="12335"
              width="15"
              height="15"
              style={{ marginLeft: "1rem" }}
            >
              <path
                d="M904.533333 674.133333l-362.666666-362.666666c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-362.666666 362.666666c-17.066667 17.066667-17.066667 42.666667 0 59.733334 17.066667 17.066667 42.666667 17.066667 59.733333 0L512 401.066667l332.8 332.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334z"
                p-id="12336"
                fill="#71DD37"
              ></path>
            </svg>
            <span style={{ color: "#71DD37", marginLeft: "0.5rem" }}>
              {percentage}%
            </span>
          </>
        ) : (
          <>
            <svg
              t="1693200149230"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11164"
              width="15"
              height="15"
              style={{ marginLeft: "1rem" }}
            >
              <path
                d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z"
                fill="#FF3E1D"
                p-id="11165"
              ></path>
            </svg>
            <span style={{ color: "#FF3E1D", marginLeft: "0.5rem" }}>
              {percentage}%
            </span>
          </>
        )}
      </>
    );
  };
  return (
    <div>
      <div className="topProducts">
        <div
          className="topProductsContainer"
          style={{ borderRight: " 1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <div className="topProductsTitle">
            <div className="topP_Title">Sales by Countries</div>
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
                <MenuItem onClick={handleClose}>Last 28 Days</MenuItem>
                <MenuItem onClick={handleClose}>Last Month</MenuItem>
                <MenuItem onClick={handleClose}>Last Year</MenuItem>
              </Menu>
            </Box>
          </div>
          <div
            style={{
              fontSize: "0.875rem",

              color: "rgba(50,71,92,0.6)",
            }}
          >
            Monthly Sales Overview
          </div>
          <div className="orderS_list">
            <List
              sx={{
                width: "100%",
                maxWidth: 440,
                bgcolor: "background.paper",
              }}
            >
              {countryData !== undefined &&
                countryData?.map((eachItem) => {
                  return (
                    <ListItem sx={{ padding: "0.2rem 0rem" }}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={eachItem?.imgurl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            ${eachItem?.title}k
                            {growth(eachItem?.growth, eachItem?.percentage)}
                          </Typography>
                        }
                        secondary={eachItem?.subTitle}
                        sx={{ width: "200px" }}
                      ></ListItemText>

                      <ListItemText align={"center"}>
                        {eachItem?.amount}k
                      </ListItemText>
                    </ListItem>
                  );
                })}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
