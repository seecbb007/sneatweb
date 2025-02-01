import React, { useState } from "react";
import "./header.css";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginData } from "../../store/actions/loginAction";
//imagage
import man1 from "../../asset/man1.png";
//MUI
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TranslateIcon from "@mui/icons-material/Translate";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";

//mui menu list
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
//mui menu list icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

//import constance
import {
  popup_searchButtons,
  languages,
  iconshortcuts,
  messageExamples,
} from "../../constants/constant";

export default function Header() {
  //useState
  const [dropdownPopperOn, setDropdownPopperOn] = useState(false);
  const [dropdownShortcutsOn, setDropdownShortcutsOn] = useState(false);
  const [dropdownNotification, setDropdownNotification] = useState(false);
  const [dropDownAvatar, setDropDownAvatar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  //backdrop mui
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  //popper
  const handleClickpopper = () => {
    setDropdownPopperOn(!dropdownPopperOn);
  };
  //shortcuts
  const handleClickshortcuts = () => {
    setDropdownShortcutsOn(!dropdownShortcutsOn);
  };
  // notification
  const handleClicknotification = () => {
    setDropdownNotification(!dropdownNotification);
  };
  //avatar
  const handleClickAvatar = () => {
    setDropDownAvatar(!dropDownAvatar);
  };
  //bottom navigation

  function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(7))?.map(
      () => messageExamples[getRandomInt(messageExamples.length)]
    );
  }
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  //drop down list
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAvatarList = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvatarList = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  const routeMap = {
    Analytics: "/dashboards/analytics",
    CRM: "/dashboards/crm",
    eCommerce: "/dashboards/ecommerce",
  }

  return (
    <div>
      <div className="navBar">
        <Box
          sx={{
            flexGrow: 1,
            height: "5rem",
          }}
        >
          <AppBar
            position="absolute"
            sx={{
              borderRadius: "10px",
              // minWidth: "300px",
              // border: "1px solid yellow",
              // zIndex: "500",
              // border: "1px solid cyan",
            }}
          >
            <Toolbar
              sx={{
                backgroundColor: "#FEFEFF",
                boxShadow: "rgba(50, 71, 92, 0.1) 0px 2px 10px 0px",
              }}
            >
              <div>
                <Button onClick={handleOpen}>
                  <svg
                    t="1691179544466"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3121"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
                      fill="#4D5F71"
                      p-id="3122"
                    ></path>
                  </svg>
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 5,
                  }}
                  open={open}
                  
                >
                  <div className="popup_searchContainer">
                    <div className="popup_searchbar">
                      <svg
                        t="1691179544466"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3121"
                        width="35"
                        height="35"
                        className="popup_searchbar_svg"
                      >
                        <path
                          d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
                          fill="#4D5F71"
                          p-id="3122"
                        ></path>
                      </svg>
                      <input
                        type="text"
                        className="popup_searchbar_input"
                      ></input>
                      <Button
                        sx={{ color: "rgba(50, 71, 92, 0.38)" }}
                        onClick={handleClose}
                      >
                        [esc]
                      </Button>
                      <Button
                        sx={{ color: "rgba(50, 71, 92, 0.38)" }}
                        onClick={handleClose}
                      >
                        x
                      </Button>
                    </div>
                    <div className="popup_listItem_Container">
                    <div>Apps & Pages, User Interface, Forms & Tables Features are coming soon.</div>
                      <div className="popup_listItem_grid">
                        
                        <div className="popup_listItem_buttonslist">
                          <div className="popup_listItem_Title">
                            POPULAR SEARCHES
                          </div>
                          {popup_searchButtons.popularSearches?.map(
                            (eachitem, index) => {
                              return (
                                <div key={eachitem.btnName}>
                                  <Button
                                    className="listitem_name"
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      color: "rgba(50, 71, 92, 0.87)",
                                      paddingLeft: 0,
                                      marginTop: "3px",
                                    }}
                                    onClick={() => navigate(routeMap[eachitem.btnName])}
                                  >
                                    {eachitem.icon}
                                    <span className="popup_listItem_btnname">
                                      {eachitem.btnName}
                                    </span>
                                  </Button>
                                </div>
                              );
                            }
                          )}
                        </div>
                        
                        <div className="popup_listItem_buttonslist">
                          <div className="popup_listItem_Title">
                            APPS & PAGES
                          </div>
                          {popup_searchButtons.appPages.map(
                            (eachitem, index) => {
                              return (
                                <div key={eachitem.btnName}>
                                  <Button
                                    className="listitem_name"
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      color: "rgba(50, 71, 92, 0.87)",
                                      paddingLeft: 0,
                                      marginTop: "3px",
                                    }}
                                  >
                                    {eachitem.icon}
                                    <span className="popup_listItem_btnname">
                                      {eachitem.btnName}
                                    </span>
                                  </Button>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="popup_listItem_buttonslist">
                          <div className="popup_listItem_Title">
                            USER INTERFACE
                          </div>
                          {popup_searchButtons.userInterface.map(
                            (eachitem, index) => {
                              return (
                                <div key={eachitem.btnName}>
                                  <Button
                                    className="listitem_name"
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      color: "rgba(50, 71, 92, 0.87)",
                                      paddingLeft: 0,
                                      marginTop: "3px",
                                    }}
                                  >
                                    {eachitem.icon}
                                    <span className="popup_listItem_btnname">
                                      {eachitem.btnName}
                                    </span>
                                  </Button>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="popup_listItem_buttonslist">
                          <div className="popup_listItem_Title">
                            FORMS & TABLES
                          </div>
                          {popup_searchButtons.formstables.map(
                            (eachitem, index) => {
                              return (
                                <div key={eachitem.btnName}>
                                  <Button
                                    className="listitem_name"
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      color: "rgba(50, 71, 92, 0.87)",
                                      paddingLeft: 0,
                                      marginTop: "3px",
                                    }}
                                  >
                                    {eachitem.icon}
                                    <span className="popup_listItem_btnname">
                                      {eachitem.btnName}
                                    </span>
                                  </Button>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Backdrop>
              </div>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "rgba(50, 71, 92, 0.38)",
                  height: "20px",
                  minWidth: "200px",
                }}
                onClick={handleOpen}
              >
                Search (Ctrl +/)
              </Typography>

              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    margin: 0,
                    padding: 0,
                    ":hover": {
                      backgroundColor: "#F7F8F9",
                    },
                    minWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "Center",
                    position: "relative",
                  }}
                  onClick={() => handleClickpopper()}
                >
                  <div
                    className={
                      dropdownPopperOn
                        ? "searchbar_dropdownone"
                        : "searchbar_dropdownone_hidden"
                    }
                  >
                    {languages.map((lang) => {
                      return (
                        <div className="lan" key={lang.lan}>
                          {lang.lan}
                        </div>
                      );
                    })}
                  </div>
                  <TranslateIcon
                    size="large"
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: 0,
                      padding: 0,
                      color: "#4D5F71",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                  ></TranslateIcon>
                </Button>
                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    margin: 0,
                    padding: 0,
                    ":hover": {
                      backgroundColor: "#F7F8F9",
                    },
                    minWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "Center",
                  }}
                >
                  <BedtimeOutlinedIcon
                    size="large"
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: 0,
                      padding: 0,
                      color: "#4D5F71",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                  ></BedtimeOutlinedIcon>
                </Button>
                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    margin: 0,
                    padding: 0,
                    ":hover": {
                      backgroundColor: "#F7F8F9",
                    },
                    minWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "Center",
                    position: "relative",
                  }}
                  onClick={() => handleClickshortcuts()}
                >
                  <div
                    className={
                      dropdownShortcutsOn
                        ? "dropdown_shortcuts"
                        : "dropdown_shortcuts_hidden"
                    }
                  >
                    <div className="dropdown_shortcuts_titleContainer">
                      <div className="dropdown_shortcuts_title">Shortcuts</div>
                      <Tooltip title="Add Shortcut" placement="top-start">
                        <svg
                          t="1691214650805"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="2262"
                          width="30"
                          height="30"
                        >
                          <path
                            d="M512 958.016611c-119.648434 0-232.1288-46.367961-316.736783-130.559656-84.640667-84.255342-131.263217-196.255772-131.263217-315.455235 0-119.168499 46.624271-231.199892 131.232254-315.424271 84.607983-84.191695 197.088348-130.559656 316.736783-130.559656s232.1288 46.367961 316.704099 130.559656c84.67163 84.224378 131.263217 196.255772 131.263217 315.391587 0.032684 119.199462-46.591587 231.232576-131.263217 315.455235C744.1288 911.615966 631.648434 958.016611 512 958.016611zM512 129.983389c-102.623626 0-199.071738 39.743475-271.583282 111.936783-72.480581 72.12794-112.416718 168.063432-112.416718 270.079828s39.903454 197.951888 112.384034 270.047144c72.511544 72.191587 168.959656 111.936783 271.583282 111.936783 102.592662 0 199.071738-39.743475 271.583282-111.936783 72.480581-72.160624 112.416718-168.063432 112.384034-270.079828 0-102.016396-39.903454-197.919204-112.384034-270.016181C711.071738 169.759548 614.592662 129.983389 512 129.983389z"
                            fill="#BAC1C8"
                            p-id="2263"
                          ></path>
                          <path
                            d="M736.00086 480.00086 544.00086 480.00086 544.00086 288.00086c0-17.664722-14.336138-32.00086-32.00086-32.00086s-32.00086 14.336138-32.00086 32.00086l0 192L288.00086 480.00086c-17.664722 0-32.00086 14.336138-32.00086 32.00086s14.336138 32.00086 32.00086 32.00086l192 0 0 192c0 17.695686 14.336138 32.00086 32.00086 32.00086s32.00086-14.303454 32.00086-32.00086L544.00258 544.00086l192 0c17.695686 0 32.00086-14.336138 32.00086-32.00086S753.696546 480.00086 736.00086 480.00086z"
                            fill="#BAC1C8"
                            p-id="2264"
                          ></path>
                        </svg>
                      </Tooltip>
                    </div>
                    <div className="dropdown_shortcuts_listitem">
                      {iconshortcuts?.map((eachitem) => {
                        return (
                          <div
                            className="iconshortcut_eachitem"
                            key={eachitem.shortcutTitle}
                          >
                            <div className="iconCircle">
                              <div>{eachitem.icon}</div>
                            </div>
                            <div className="shortcut_Title">
                              {eachitem.shortcutTitle}
                            </div>
                            <div className="shortcut_subTitle">
                              {eachitem.shortcutSubtitle}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <WidgetsOutlinedIcon
                    size="large"
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: 0,
                      padding: 0,
                      color: "#4D5F71",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                  ></WidgetsOutlinedIcon>
                </Button>
                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    margin: 0,
                    padding: 0,
                    ":hover": {
                      backgroundColor: "#F7F8F9",
                    },
                    minWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "Center",
                    position: "relative",
                  }}
                >
                  <div
                    className={
                      dropdownNotification
                        ? "dropdownnotification"
                        : "dropdownnotification_hidden"
                    }
                  >
                    <Box
                      sx={{
                        // pb: 1,
                        width: "455px",

                        position: "absolute",
                        top: "50px",
                        right: "15px",
                        zIndex: "10",
                        backgroundColor: "white",
                        boxShadow:
                          "rgba(50, 71, 92, 0.2) 0px 5px 5px -3px, rgba(50, 71, 92, 0.14) 0px 8px 10px 1px, rgba(50, 71, 92, 0.12) 0px 3px 14px 2px",
                      }}
                      ref={ref}
                    >
                      <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "15px 10px",
                          borderBottom: "1px solid rgba(50, 71, 92, 0.12)",
                        }}
                      >
                        <div className="notification_title">Notifications</div>
                        <div className="number_of_notifications">6 NEW</div>
                      </ListSubheader>
                      <CssBaseline />
                      <List
                        sx={{
                          width: "450px",
                          height: "300px",
                          overflowY: "scroll",
                        }}
                      >
                        {messages?.map(
                          ({ primary, secondary, person, date }, index) => (
                            <ListItem
                              button
                              key={index + person}
                              sx={{
                                borderBottom:
                                  "1px solid rgba(50, 71, 92, 0.12)",
                              }}
                            >
                              <ListItemAvatar>
                                <div>{person}</div>
                              </ListItemAvatar>
                              <ListItemText
                                primary={primary}
                                secondary={secondary}
                              />
                              <div className="messages_date">{date}</div>
                            </ListItem>
                          )
                        )}
                      </List>
                      <Paper
                        elevation={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "10px 5px",
                          boxShadow: "rgba(105, 108, 255, 0.4) 0px 2px 4px 0px",
                        }}
                      >
                        <BottomNavigation
                          showLabels
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "50px",
                            backgroundColor: "rgb(105, 108, 255)",
                            width: "350px",
                            height: "35px",
                            borderRadius: "5px",
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          <div>READY ALL NOTIFICATIONS</div>
                        </BottomNavigation>
                      </Paper>
                    </Box>
                  </div>
                  <NotificationsNoneOutlinedIcon
                    size="large"
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: 0,
                      padding: 0,
                      color: "#4D5F71",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "Center",
                    }}
                    onClick={() => handleClicknotification()}
                  >
                    <div className="reddot"></div>
                  </NotificationsNoneOutlinedIcon>
                </Button>

                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    margin: 0,
                    padding: 0,
                    ":hover": {
                      backgroundColor: "#F7F8F9",
                    },
                    minWidth: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "Center",
                    position: "relative",
                  }}
                  onClick={() => handleClickAvatar()}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={man1}
                    sx={{ marginLeft: "15px" }}
                  ></Avatar>
                </Button>
                <div
                  className={
                    dropDownAvatar
                      ? "searchbar_avatar"
                      : "searchbar_avatar_hidden"
                  }
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      padding: "0",
                      boxShadow:
                        "rgba(50, 71, 92, 0.2) 0px 5px 5px -3px,rgba(50, 71, 92, 0.14) 0px 8px 10px 1px,rgba(50, 71, 92, 0.12) 0px 3px 14px 2px",
                      borderRadius: "5px",
                    }}
                  >
                    <ListItem sx={{ padding: "0" }}>
                      <ListItemAvatar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={man1}
                            sx={{ marginLeft: "15px" }}
                          ></Avatar>
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary="John Doe"
                        secondary="Admin"
                        sx={{ marginLeft: "1rem" }}
                      />
                    </ListItem>
                    <Divider></Divider>
                    <ListItem sx={{ padding: "0" }}>
                      <ListItemButton sx={{ padding: "0.2rem  1rem" }}>
                        <ListItemIcon>
                          <PersonOutlineOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Profile"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ padding: "0.2rem  1rem" }}>
                        <ListItemIcon>
                          <EmailOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Inbox"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ padding: "0.2rem  1rem" }}>
                        <ListItemIcon>
                          <ChatBubbleOutlineOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Chat"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ padding: "0.2rem  1rem" }}>
                        <ListItemIcon>
                          <SettingsOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Settings"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ padding: "0.2rem 1rem" }}>
                        <ListItemIcon>
                          <AttachMoneyOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Pricing"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ padding: "0.2rem  1rem" }}>
                        <ListItemIcon>
                          <LiveHelpOutlinedIcon
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="FAQ"
                          sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider></Divider>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{ padding: "0.2rem 1rem" }}
                          onClick={() => dispatch(setLoginData(false))}
                        >
                          <ListItemIcon>
                            <ExitToAppOutlinedIcon
                              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary="Sign Out"
                            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </StyledBadge>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}
