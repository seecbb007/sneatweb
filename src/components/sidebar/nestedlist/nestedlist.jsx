import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ReceiptIcon from "@mui/icons-material/Receipt";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

// import constant data
import SIDEBAR_BUTTON_LIST from "../../../constants/constant";

export default function NestedList({ buttonName, childrenButtonList, icon }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderButtons = (childrenButtonList) => {
    let btnList = childrenButtonList?.map((eachButton) => {
      if (eachButton?.children !== null) {
        renderButtons(eachButton.children);
        return (
          <NestedList
            buttonName={eachButton.buttName}
            childrenButtonList={eachButton.children}
          />
        );
      } else {
        return (
          <>
            <ListItemButton sx={{ pl: 2 }}>
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
                {eachButton?.buttName}
              </ListItemText>
            </ListItemButton>
          </>
        );
      }
    });
    return btnList;
  };

  return (
    <>
      <List>
        <ListItemButton
          onClick={() => handleClick()}
          sx={{ overflowY: "none" }}
        >
          {icon ? (
            <ListItemIcon sx={{}}>{icon}</ListItemIcon>
          ) : (
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
          )}

          <ListItemText
            primary={buttonName}
            sx={{ color: "rgba(50, 71, 92, 0.6)" }}
          />
          {open ? (
            <ExpandMoreOutlinedIcon
              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
            ></ExpandMoreOutlinedIcon>
          ) : (
            <KeyboardArrowRightOutlinedIcon
              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
            />
            // <ExpandLess sx={{ color: "#696CFF" }} />
          )}
        </ListItemButton>
        {open ? (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* {childrenButtonList?.map((eachButton) => {
                  return (
                    <>
                      <li>
                        <ListItemButton sx={{ pl: 4 }}>
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
                            {eachButton?.buttName}
                          </ListItemText>
                        </ListItemButton>
                      </li>
                    </>
                  );
                })} */}
              {renderButtons(childrenButtonList)}
            </List>
          </Collapse>
        ) : (
          <></>
        )}
      </List>
    </>
  );
}
