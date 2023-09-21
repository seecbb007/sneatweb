import React from "react";
import "./topProducts.css";
//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui inset divider
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function TopProducts({ topProducts }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const salesData = topProducts?.sales;
  const volumeData = topProducts?.volume;

  return (
    <div>
      <div className="topProducts">
        <div
          className="topProductsContainer"
          style={{ borderRight: " 1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <div className="topProductsTitle">
            <div className="topP_Title">
              Top Products By
              <span className="topP_subject"> Sales</span>
            </div>
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
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Refresh</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
              </Menu>
            </Box>
          </div>
          <div className="orderS_list">
            <List
              sx={{
                width: "100%",
                maxWidth: 440,
                bgcolor: "background.paper",
              }}
            >
              {salesData?.map((eachItem) => {
                return (
                  <ListItem sx={{ padding: "1px 16px" }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={eachItem?.imgurl} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={eachItem?.title}
                      secondary={eachItem?.subTitle}
                      sx={{ width: "200px" }}
                    />
                    <ListItemText>${eachItem?.amount}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
        <div
          className="topProductsContainer"
          style={{ borderRight: " 1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <div className="topProductsTitle">
            <div className="topP_Title">
              Top Products By
              <span className="topP_subject"> Volume</span>
            </div>
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
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Refresh</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
              </Menu>
            </Box>
          </div>
          <div className="orderS_list">
            <List
              sx={{
                width: "100%",
                maxWidth: 440,
                bgcolor: "background.paper",
              }}
            >
              {volumeData?.map((eachItem) => {
                return (
                  <ListItem sx={{ padding: "1px 16px" }}>
                    <ListItemAvatar>
                      <Avatar alt="volum icon" src={eachItem?.imgurl} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={eachItem?.title}
                      secondary={eachItem?.subTitle}
                      sx={{ width: "200px" }}
                    />
                    <ListItemText>{eachItem?.amount}k</ListItemText>
                    {eachItem?.growth === "positive" ? (
                      <ListItemText
                        sx={{
                          backgroundColor: "#E8FADF",
                          textAlign: "center",
                          color: "#71dd37",
                          borderRadius: "3px",
                          width: "70px",
                        }}
                      >
                        +{eachItem?.percentage}%
                      </ListItemText>
                    ) : (
                      <ListItemText
                        sx={{
                          width: "70px",
                          backgroundColor: "#FFE0DB",
                          textAlign: "center",
                          color: "#ff3e1d",
                          borderRadius: "3px",
                          //   padding: "1px 2px",
                        }}
                      >
                        -{eachItem?.percentage}%
                      </ListItemText>
                    )}
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
