import React, { useEffect, useState } from "react";
import "./timelineCard.css";
import { useSelector, useDispatch } from "react-redux";
import { setAnalysisData } from "../../../store/actions/AnalysisAction";
import axios from "axios";

//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui basic timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

//mui color

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";

//mui avatar
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function TimelineCard() {
  //color

  const theme = createTheme({
    palette: {
      primary: {
        main: "#696CFF",
      },
      secondary: {
        main: "#FFAB00",
      },
      info: {
        main: "#03C3EC",
      },
    },
  });

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
  const activityTimelineData = data?.activityTimeline;

  return (
    <div>
      <ThemeProvider
        theme={theme}
        sx={{ height: "100%", backgroundColor: "red" }}
      >
        <div
          style={{
            height: "100%",

            padding: "1rem 1.5rem",
          }}
        >
          <div className="orderS_title" style={{ width: "100%" }}>
            <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
              Activity Timeline
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
                <MenuItem onClick={handleClose}>Share Timeline</MenuItem>
                <MenuItem onClick={handleClose}>Suggest Edits</MenuItem>
                <MenuItem onClick={handleClose}>Report Bug</MenuItem>
              </Menu>
            </Box>
          </div>
          <div className="timeline_Container">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {activityTimelineData !== undefined &&
                activityTimelineData.map((eachdata) => {
                  return (
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color={eachdata.color} />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <div className="timelineinfo">
                          <div className="timelineinfo_title">
                            <div className="timelineinfo_title_subscribe">
                              {eachdata.titleSubscribe}
                            </div>
                            <div className="timelineinfo_title_mins">
                              {eachdata.mins}
                            </div>
                          </div>
                          <div className="timelineinfo_subTitle">
                            {eachdata.subtitleSubscribe}
                          </div>
                          <div className="timelineinfo_avatarinfo">
                            <div>
                              {eachdata.type === "invoices" ? (
                                <svg
                                  t="1692628267300"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="10827"
                                  width="35"
                                  height="35"
                                >
                                  <path
                                    d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.217 637.256c-15.174-0.489-31.314 0.67-49.65 2.964-24.298-14.987-40.654-35.582-52.274-65.827 0.28-1.152 0.86-3.538 1.063-4.38 0.474-1.958 0.867-3.594 1.243-5.185 4.293-18.13 6.615-31.358 7.3-44.695 0.518-10.074-0.04-19.368-1.827-27.976-3.298-18.584-16.454-29.453-33.021-30.126-15.446-0.627-29.649 7.993-33.281 21.373-5.913 21.612-2.45 50.07 10.08 98.582-15.964 38.056-37.052 82.661-51.203 107.539-18.885 9.74-33.604 18.605-45.953 28.427-16.303 12.966-26.48 26.29-29.286 40.306-1.355 6.48 0.692 14.966 5.36 21.912 5.296 7.879 13.282 12.991 22.855 13.735 24.152 1.877 53.83-23.024 86.59-79.258 3.295-1.09 6.78-2.257 11.026-3.69 2.323-0.783 10.464-3.538 11.91-4.026 7.521-2.54 12.98-4.36 18.376-6.116 23.396-7.612 41.096-12.429 57.21-15.163 27.973 14.973 60.316 24.796 82.098 24.796 17.979 0 30.126-9.319 34.515-23.985 3.857-12.886 0.794-27.824-7.473-36.084-8.56-8.41-24.3-12.434-45.658-13.123z m-247.985 128.42v-0.36l0.126-0.338c1.275-3.421 3.157-7.008 5.6-10.758 4.284-6.576 10.173-13.5 17.472-20.865 3.92-3.955 8.002-7.8 12.79-12.12 1.073-0.969 7.91-7.059 9.189-8.25l11.176-10.407-8.12 12.934c-12.326 19.638-23.46 33.78-33.013 43.004-3.507 3.387-6.6 5.9-9.091 7.505-1.027 0.662-1.916 1.144-2.613 1.424-0.409 0.163-0.771 0.268-1.13 0.302a2.202 2.202 0 0 1-1.117-0.16 2.068 2.068 0 0 1-1.269-1.911z m125.934-218.269l-2.26 4.007-1.39-4.385c-3.114-9.829-5.387-24.641-6.016-37.997-0.716-15.197 0.49-24.323 5.286-24.323 6.74 0 9.831 10.808 10.076 27.053 0.216 14.28-2.03 29.142-5.696 35.645z m-5.81 58.464l1.534-4.05 2.088 3.795c11.69 21.245 26.858 38.967 43.538 51.315l3.595 2.662-4.38 0.904c-16.328 3.372-31.544 8.457-52.34 16.842 2.174-0.876-21.623 8.863-27.638 11.169l-5.252 2.013 2.802-4.877c12.35-21.496 23.758-47.326 36.052-79.773z m157.626 76.261c-7.864 3.104-24.777 0.329-54.569-12.387l-7.561-3.227 8.199-0.607c23.295-1.724 39.807-0.44 49.422 3.08 4.09 1.498 6.824 3.388 8.037 5.553 1.31 2.336 0.71 4.81-1.362 6.31-0.448 0.427-1.155 0.88-2.166 1.278z"
                                    fill="#CB0606"
                                    p-id="10828"
                                  ></path>
                                </svg>
                              ) : (
                                <AvatarGroup max={5}>
                                  {eachdata?.avatar.map((eachAvatar) => {
                                    return (
                                      <Avatar>
                                        <img
                                          src={eachAvatar}
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        ></img>
                                      </Avatar>
                                    );
                                  })}
                                </AvatarGroup>
                              )}
                            </div>
                            <div className="timelineinfo_avatarinfo_content">
                              <div className="timelineinfo_avatarinfo_contentContainer">
                                <div className="timelineinfo_avatarinfo_content_title">
                                  {eachdata.avatarInfo}
                                </div>
                                <div className="timelineinfo_avatarinfo_content_subTitle">
                                  {eachdata.avatarInfoSub}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              {/* <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="info" />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem> */}
            </Timeline>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
