import React from "react";

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

import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

export default function TransactionCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="orderStatisticCard">
        <div className="orderS_title">
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Transactions
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
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#FFE0DB" }}>
                  <svg
                    t="1692596314205"
                    viewBox="0 0 1050 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4445"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M880.64 130.784c25.696 12.576 48.096 30.496 64.512 52.48 34.528 46.304 44.224 109.376 28.832 187.456-15.552 79.04-50.4 145.728-101.152 194.048-9.28 9.696-19.232 18.752-29.792 27.072-54.368 42.816-123.008 65.44-198.496 65.44l-12.128 0L404.448 657.28 339.872 960l-132.416 0 10.08-46.304 46.144 0 64.576-302.72 188.256 0c180.256 0 330.944-111.072 371.264-299.936C933.472 97.216 780.16 0 648.352 0L199.072 0 0 913.696l152.032 0L128 1024l263.648 0 64.576-302.72 188.256 0c180.256 0 330.944-111.072 371.264-299.936C1049.472 263.648 974.944 169.408 880.64 130.784zM422.336 186.08l129.12 0c64.576 0 107.616 55.552 88.8 124.96-16.128 69.44-83.392 124.96-150.624 124.96l-123.744 0L422.336 186.08z"
                      fill="#FFB1A4"
                      p-id="4446"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Paypal"
                secondary="Send money"
                sx={{ width: "200px" }}
              />
              <ListItemText>+82.6 USD</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E7E7FF" }}>
                  <svg
                    t="1692597228959"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5801"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M884.419048 786.456381a73.142857 73.142857 0 0 1-73.142858 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V268.190476a121.904762 121.904762 0 0 1 121.904762-121.904762h419.888762a73.142857 73.142857 0 0 1 73.142857 73.142857l-0.024381 49.834667h74.459428a73.142857 73.142857 0 0 1 73.142858 73.142857v444.050286z m-73.142858-444.050286H195.047619v444.050286h616.228571l-0.02438-123.63581H540.062476v-196.754285l271.189334-0.024381v-123.611429z m0 196.778667H613.180952v50.492952h198.070858v-50.468571zM663.698286 219.428571H243.809524a48.761905 48.761905 0 0 0-48.761905 48.761905l-0.024381 1.072762h468.650667V219.428571z"
                      p-id="5802"
                      fill="#6C6FFF"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Wallet"
                secondary="Mac'D"
                sx={{ width: "200px" }}
              />
              <ListItemText>+270.69 USD</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#D6F5FC" }}>
                  <svg
                    t="1692597379950"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6864"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M85.312 512a426.688 426.688 0 0 0 844.8 85.312H426.688V93.888A426.816 426.816 0 0 0 85.312 512zM512 0v512h512a512 512 0 1 1-512-512z m506.816 438.848H585.152V5.184a512.32 512.32 0 0 1 433.664 433.664z"
                      fill="#9AE7F7"
                      p-id="6865"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Transfer"
                secondary="Refund"
                sx={{ width: "200px" }}
              />
              <ListItemText>+637.91 USD</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E8F9DF" }}>
                  <svg
                    t="1692597475924"
                    viewBox="0 0 1098 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7888"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M1005.714286 73.142857q37.714286 0 64.571429 26.857143t26.857143 64.571429l0 694.857143q0 37.714286-26.857143 64.571429t-64.571429 26.857143l-914.285714 0q-37.714286 0-64.571429-26.857143t-26.857143-64.571429l0-694.857143q0-37.714286 26.857143-64.571429t64.571429-26.857143l914.285714 0zm-914.285714 73.142857q-7.428571 0-12.857143 5.428571t-5.428571 12.857143l0 128 950.857143 0 0-128q0-7.428571-5.428571-12.857143t-12.857143-5.428571l-914.285714 0zm914.285714 731.428571q7.428571 0 12.857143-5.428571t5.428571-12.857143l0-347.428571-950.857143 0 0 347.428571q0 7.428571 5.428571 12.857143t12.857143 5.428571l914.285714 0zm-859.428571-73.142857l0-73.142857 146.285714 0 0 73.142857-146.285714 0zm219.428571 0l0-73.142857 219.428571 0 0 73.142857-219.428571 0z"
                      p-id="7889"
                      fill="#C6F1AF"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Credit Card"
                secondary="Ordered Food"
                sx={{ width: "200px" }}
              />
              <ListItemText>-838.71 USD</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#E7E7FF" }}>
                  <svg
                    t="1692597228959"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5801"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M884.419048 786.456381a73.142857 73.142857 0 0 1-73.142858 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V268.190476a121.904762 121.904762 0 0 1 121.904762-121.904762h419.888762a73.142857 73.142857 0 0 1 73.142857 73.142857l-0.024381 49.834667h74.459428a73.142857 73.142857 0 0 1 73.142858 73.142857v444.050286z m-73.142858-444.050286H195.047619v444.050286h616.228571l-0.02438-123.63581H540.062476v-196.754285l271.189334-0.024381v-123.611429z m0 196.778667H613.180952v50.492952h198.070858v-50.468571zM663.698286 219.428571H243.809524a48.761905 48.761905 0 0 0-48.761905 48.761905l-0.024381 1.072762h468.650667V219.428571z"
                      p-id="5802"
                      fill="#6C6FFF"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Wallet"
                secondary="Starbucks"
                sx={{ width: "200px" }}
              />
              <ListItemText>+203.33 USD</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#FFF1D6" }}>
                  <svg
                    t="1692598237688"
                    viewBox="0 0 1098 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8342"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M1005.728 73.152q37.728 0 64.576 26.848t26.848 64.576l0 694.848q0 37.728-26.848 64.576t-64.576 26.848l-914.272 0q-37.728 0-64.576-26.848t-26.848-64.576l0-694.848q0-37.728 26.848-64.576t64.576-26.848l914.272 0zM91.424 146.272q-7.424 0-12.864 5.44t-5.44 12.864l0 128 950.848 0 0-128q0-7.424-5.44-12.864t-12.864-5.44l-914.272 0zM1005.728 877.728q7.424 0 12.864-5.44t5.44-12.864l0-347.424-950.848 0 0 347.424q0 7.424 5.44 12.864t12.864 5.44l914.272 0zM146.272 804.576l0-73.152 146.272 0 0 73.152-146.272 0zM365.728 804.576l0-73.152 219.424 0 0 73.152-219.424 0z"
                      p-id="8343"
                      fill="#FFAC02"
                    ></path>
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Mastercard"
                secondary="Ordered Food"
                sx={{ width: "200px" }}
              />
              <ListItemText>-92.45 USD</ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
