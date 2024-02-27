import React, { useState } from "react";
import "./sidebar.css";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  SIDEBAR_BUTTON_LIST_APP,
  SIDEBAR_BUTTON_LIST_USER,
  SIDEBAR_BUTTON_LIST_FORMS,
  SIDEBAR_BUTTON_LIST_CHARTS,
} from "../../constants/constant";
import NestedList from "./nestedlist/nestedlist";

//mui import
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ListSubheader from "@mui/material/ListSubheader";
import ReceiptIcon from "@mui/icons-material/Receipt";

import { Earbuds } from "@mui/icons-material";

export default function Siderbar() {
  const navigate = useNavigate();

  //mini variant drawer
  const drawerWidth = 300;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    overflowY: "scroll",
    // backgroundColor: "yellow",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    overflowY: "hidden",
    scrollbars: "none",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [openInvoice, setOpenInvoice] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMouseInDrawerOpen = () => {
    setOpen(true);
  };
  const handleMouseInDrawerClose = () => {
    setOpen(false);
  };

  // cllapse
  const handleClickdashboard = () => {
    setOpenDashboard(!openDashboard);
  };

  const renderButtons = (buttonList) => {
    let btnList = buttonList?.map((eachButton) => {
      if (eachButton?.children !== null) {
        renderButtons(eachButton.children);
        return (
          <NestedList
            key={eachButton.buttName}
            buttonName={eachButton.buttName}
            childrenButtonList={eachButton.children}
            icon={eachButton.icon}
          />
        );
      } else {
        return (
          <ListItemButton
            sx={{
              pl: 2,
              color: "rgba(50, 71, 92, 0.6)",

              maxHeight: "48px",
            }}
          >
            {eachButton.icon}
            <ListItemText
              sx={{ color: "rgba(50, 71, 92, 0.6)", marginLeft: "30px" }}
            >
              {eachButton?.buttName}
            </ListItemText>
          </ListItemButton>
        );
      }
    });
    return btnList;
  };

  return (
    <div className="sideBar">
      <Box sx={{ display: "flex", position: "relative" }}>
        <div
          className="sideBar_Container"
          onMouseEnter={() => handleMouseInDrawerOpen()}
          onMouseLeave={() => handleMouseInDrawerClose()}
        >
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              position: "relative",
              transition: "all 1s ease-out",
            }}
          >
            {open ? (
              <>
                <DrawerHeader sx={{}}></DrawerHeader>
                <DrawerHeader
                  sx={{
                    width: "299px",
                    color: "rgba(50,71,92,0.87)",
                    fontWeight: "700",
                    fontSize: "30px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0",
                    position: "fixed",
                    zIndex: "999",
                    backgroundColor: "white",
                  }}
                >
                  <svg
                    t="1691468780342"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="10075"
                    width="45"
                    height="45"
                    style={{ margin: " 0 20px 0 10px" }}
                  >
                    <path
                      d="M146.212571 365.714286a365.714286 365.714286 0 1 1 365.714286 365.714285 366.153143 366.153143 0 0 1-365.714286-365.714285z m658.285715 0a292.571429 292.571429 0 1 0-292.571429 292.571428 292.937143 292.937143 0 0 0 292.571429-292.571428z"
                      p-id="10076"
                      fill="#696cff"
                    ></path>
                    <path
                      d="M438.784 658.285714h146.285714v365.714286h-146.285714z"
                      p-id="10077"
                      fill="#696cff"
                    ></path>
                    <path
                      d="M438.784 219.428571l292.571429-73.142857-73.142858 292.571429z"
                      p-id="10078"
                      fill="#696cff"
                    ></path>
                    <path
                      d="M585.069714 219.428571l73.142857 73.142858-365.714285 365.714285-73.142857-73.142857z"
                      p-id="10079"
                      fill="#696cff"
                    ></path>
                  </svg>
                  sneat
                  <div className="arrowCircle">
                    <div className="arrowCircle_inner">
                      {open ? (
                        <svg
                          t="1691469750439"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="12109"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"
                            fill="#ffffff"
                            p-id="12110"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          t="1691469726049"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="11091"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M401.066667 512l302.933333 302.933333-59.733333 59.733334L341.333333 571.733333 281.6 512 341.333333 452.266667l302.933334-302.933334 59.733333 59.733334L401.066667 512z"
                            fill="#ffffff"
                            p-id="11092"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </DrawerHeader>
              </>
            ) : (
              <DrawerHeader
                sx={{
                  // width: "299px",
                  color: "rgba(50,71,92,0.87)",
                  fontWeight: "700",
                  fontSize: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0",
                }}
              >
                <svg
                  t="1691468780342"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10075"
                  width="45"
                  height="45"
                >
                  <path
                    d="M146.212571 365.714286a365.714286 365.714286 0 1 1 365.714286 365.714285 366.153143 366.153143 0 0 1-365.714286-365.714285z m658.285715 0a292.571429 292.571429 0 1 0-292.571429 292.571428 292.937143 292.937143 0 0 0 292.571429-292.571428z"
                    p-id="10076"
                    fill="#696cff"
                  ></path>
                  <path
                    d="M438.784 658.285714h146.285714v365.714286h-146.285714z"
                    p-id="10077"
                    fill="#696cff"
                  ></path>
                  <path
                    d="M438.784 219.428571l292.571429-73.142857-73.142858 292.571429z"
                    p-id="10078"
                    fill="#696cff"
                  ></path>
                  <path
                    d="M585.069714 219.428571l73.142857 73.142858-365.714285 365.714285-73.142857-73.142857z"
                    p-id="10079"
                    fill="#696cff"
                  ></path>
                </svg>
              </DrawerHeader>
            )}
            <Divider />
            <List>
              <ListItemButton
                onClick={() => handleClickdashboard()}
                sx={{ overflowY: "none" }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon sx={{ color: "#696CFF" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboards" />
                {open ? (
                  <ExpandMoreOutlinedIcon
                    sx={{ color: "#696CFF" }}
                  ></ExpandMoreOutlinedIcon>
                ) : (
                  <KeyboardArrowRightOutlinedIcon sx={{ color: "#696CFF" }} />
                )}
              </ListItemButton>
              {openDashboard ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      to="/dashboards/analytics"
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemButton>
                        <svg
                          t="1691440009292"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="3350"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z"
                            p-id="3351"
                            fill="#696cff"
                          ></path>
                        </svg>

                        <ListItemText sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                          Analytics
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                    <Link
                      to="/dashboards/crm"
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemButton>
                        <svg
                          t="1691440009292"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="3350"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z"
                            p-id="3351"
                            fill="#BAC1C8"
                          ></path>
                        </svg>

                        <ListItemText sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                          CRM
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                    <Link
                      to="/dashboards/ecommerce"
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemButton>
                        <svg
                          t="1691440009292"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="3350"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z"
                            p-id="3351"
                            fill="#BAC1C8"
                          ></path>
                        </svg>
                        <ListItemText sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                          eCommerce
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              ) : (
                <></>
              )}
            </List>

            <ListSubheader
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              <svg
                t="1691473019863"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13168"
                width="20"
                height="20"
              >
                <path
                  d="M63.6 489.6h896.7v44.8H63.6z"
                  p-id="13169"
                  fill="#BAC1C8"
                ></path>
              </svg>
              {open ? (
                <div className="buttonsGroup_name">APPS & PAGES</div>
              ) : (
                <></>
              )}
            </ListSubheader>
            {/* {renderButtons(SIDEBAR_BUTTON_LIST_APP)} */}
            <ListSubheader
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              <svg
                t="1691473019863"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13168"
                width="20"
                height="20"
              >
                <path
                  d="M63.6 489.6h896.7v44.8H63.6z"
                  p-id="13169"
                  fill="#BAC1C8"
                ></path>
              </svg>
              {open ? (
                <div className="buttonsGroup_name">USER INTERFACE</div>
              ) : (
                <></>
              )}
            </ListSubheader>
            {/* {renderButtons(SIDEBAR_BUTTON_LIST_USER)} */}
            <ListSubheader
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              <svg
                t="1691473019863"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13168"
                width="20"
                height="20"
              >
                <path
                  d="M63.6 489.6h896.7v44.8H63.6z"
                  p-id="13169"
                  fill="#BAC1C8"
                ></path>
              </svg>
              {open ? (
                <div className="buttonsGroup_name">FORMS & TABLES</div>
              ) : (
                <></>
              )}
            </ListSubheader>
            {/* {renderButtons(SIDEBAR_BUTTON_LIST_FORMS)} */}
            <ListSubheader
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "0",
              }}
            >
              <svg
                t="1691473019863"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13168"
                width="20"
                height="20"
              >
                <path
                  d="M63.6 489.6h896.7v44.8H63.6z"
                  p-id="13169"
                  fill="#BAC1C8"
                ></path>
              </svg>
              {open ? (
                <div className="buttonsGroup_name">CHARTS & MISC</div>
              ) : (
                <></>
              )}
            </ListSubheader>
            {/* {renderButtons(SIDEBAR_BUTTON_LIST_CHARTS)} */}
          </Drawer>
        </div>
      </Box>
    </div>
  );
}
