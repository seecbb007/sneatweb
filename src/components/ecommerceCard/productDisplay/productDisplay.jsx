import React from "react";

//mui table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//mui inset list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

//mui dropdown

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//mui icons
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Typography } from "@mui/material";

export default function ProductDisplay({ productDisplayData }) {
  //dropdown dots
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //categoryIcon function

  const renderCategoryIcon = (id) => {
    if (id === "phone") {
      return (
        <Avatar sx={{ width: 35, height: 35, bgcolor: "#E7E7FF" }}>
          <svg
            t="1693545183137"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4034"
            width="20"
            height="20"
          >
            <path
              d="M704 128v768H320V128h384m0-64H320c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM272 192v64h480v-64H272z m0 576h480v-64H272v64z m176 96h128v-64H448v64z"
              p-id="4035"
              fill="#696CFF"
            ></path>
          </svg>
        </Avatar>
      );
    } else if (id === "mouse") {
      return (
        <Avatar sx={{ width: 35, height: 35, bgcolor: "#FFF1D6" }}>
          <svg
            t="1693545272273"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6902"
            width="20"
            height="20"
          >
            <path
              d="M533.521017 1024h-43.042034A330.322581 330.322581 0 0 1 160.156403 693.677419V260.254154A260.254154 260.254154 0 0 1 420.410557 0h183.178886a260.254154 260.254154 0 0 1 260.254154 260.254154v433.423265a330.322581 330.322581 0 0 1-330.32258 330.322581zM420.410557 80.078201c-99.096774 0-180.175953 81.079179-180.175953 180.175953v433.423265c0 138.134897 112.109482 250.244379 250.244379 250.24438h43.042034c138.134897 0 250.244379-112.109482 250.244379-250.24438V260.254154c0-99.096774-81.079179-180.175953-180.175953-180.175953z"
              fill="#FFAB00"
              p-id="6903"
            ></path>
            <path
              d="M521.509286 483.472141h-19.018572a100.097752 100.097752 0 0 1-100.097752-100.097752V236.230694a100.097752 100.097752 0 0 1 100.097752-100.097752h19.018572a100.097752 100.097752 0 0 1 100.097752 100.097752v147.143695a100.097752 100.097752 0 0 1-100.097752 100.097752z m-19.018572-267.260997a20.01955 20.01955 0 0 0-20.019551 20.01955v147.143695a20.01955 20.01955 0 0 0 20.019551 20.01955h19.018572a20.01955 20.01955 0 0 0 20.019551-20.01955V236.230694a20.01955 20.01955 0 0 0-20.019551-20.01955z"
              fill="#FFAB00"
              p-id="6904"
            ></path>
            <path
              d="M512.500489 201.196481a40.039101 40.039101 0 0 1-40.039101-40.039101V69.067449a40.039101 40.039101 0 0 1 80.078201 0v92.089931a40.039101 40.039101 0 0 1-40.0391 40.039101zM424.414467 414.404692H215.210166a40.039101 40.039101 0 0 1 0-80.078201h209.204301a40.039101 40.039101 0 0 1 0 80.078201zM806.787879 414.404692H597.583578a40.039101 40.039101 0 0 1 0-80.078201h209.204301a40.039101 40.039101 0 0 1 0 80.078201z"
              fill="#FFAB00"
              p-id="6905"
            ></path>
          </svg>
        </Avatar>
      );
    } else if (id === "computer") {
      return (
        <Avatar sx={{ width: 35, height: 35, bgcolor: "#D6F5FC" }}>
          <svg
            t="1693545339943"
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8321"
            width="20"
            height="20"
          >
            <path
              d="M949.12 68.288h-870.4c-42.24 0-76.8 34.56-76.8 76.8v577.6c0 42.24 34.56 76.8 76.8 76.8h270.272v112.832H158.016c-15.744 0-28.48 12.736-28.48 28.48s12.736 28.48 28.48 28.48h711.808c15.744 0 28.48-12.736 28.48-28.48s-12.736-28.48-28.48-28.48h-190.976v-112.832h270.272c42.24 0 76.8-34.56 76.8-76.8V145.088c0-42.24-34.56-76.8-76.8-76.8z m46.528 643.904H39.488V127.68h956.16v584.512z"
              fill="#03C3EC"
              p-id="8322"
            ></path>
          </svg>
        </Avatar>
      );
    } else if (id === "tv") {
      return (
        <Avatar sx={{ width: 35, height: 35, bgcolor: "#FFE0DB" }}>
          <svg
            t="1693545384833"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9580"
            width="20"
            height="20"
          >
            <path
              d="M840.7 327.4H182.5c-30.9 0-56 25.1-56 56V838c0 30.9 25 56 56 56h17.8l-18.7 18.7c-10.9 10.9-10.9 28.6 0 39.6 10.9 10.9 28.6 10.9 39.6 0l58.3-58.3h464.3l58.3 58.3c5.5 5.5 12.6 8.2 19.8 8.2 7.2 0 14.3-2.7 19.8-8.2 10.9-10.9 10.9-28.6 0-39.6L823 894h17.8c30.9 0 56-25 56-56V383.3c-0.1-30.9-25.2-55.9-56.1-55.9z m0 510.5H182.5V383.3h658.3v454.6z"
              fill="#FF3E1D"
              p-id="9581"
            ></path>
            <path
              d="M247.6 703.6c10.3 0 18.7-8.4 18.7-18.7V470.4H636v48.2c0 10.3 8.3 18.7 18.7 18.7 10.3 0 18.6-8.3 18.6-18.7v-66.8c0-10.3-8.3-18.7-18.6-18.7h-407c-10.3 0-18.7 8.4-18.7 18.7V685c-0.1 10.2 8.3 18.6 18.6 18.6zM247.6 788.2h407c10.3 0 18.6-8.3 18.6-18.7v-167c0-10.3-8.3-18.7-18.6-18.7s-18.7 8.3-18.7 18.7v148.4H247.6c-10.3 0-18.7 8.4-18.7 18.7 0 10.3 8.4 18.6 18.7 18.6zM493.1 284.7c5.5 5.5 12.6 8.2 19.8 8.2 7.2 0 14.3-2.7 19.8-8.2L703 114.4c10.9-10.9 10.9-28.6 0-39.6-10.9-10.9-28.6-10.9-39.6 0L512.9 225.4 362.4 74.9c-10.9-10.9-28.6-10.9-39.6 0-10.9 10.9-10.9 28.6 0 39.6l170.3 170.2zM758.2 545c30.9 0 56-25.1 56-56 0-30.8-25.1-56-56-56-30.8 0-56 25.1-56 56s25.1 56 56 56z m0-74.6c10.3 0 18.7 8.4 18.7 18.7 0 10.3-8.4 18.7-18.7 18.7-10.3 0-18.6-8.4-18.6-18.7-0.1-10.4 8.3-18.7 18.6-18.7zM758.2 585c-17.6 0-31.9 14.3-31.9 31.9 0 17.6 14.3 31.9 31.9 31.9 17.6 0 31.9-14.3 31.9-31.9 0-17.6-14.3-31.9-31.9-31.9z"
              fill="#FF3E1D"
              p-id="9582"
            ></path>
          </svg>
        </Avatar>
      );
    }
  };

  return (
    <div style={{ padding: "0.5rem", height: "100%" }}>
      <div className="tableDetail">
        <div className="tableDetail_Container">
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="start"
                    sx={{
                      padding: "0.3rem 1rem",
                      color: "rgba(50, 71, 92, 0.87)",
                      fontWeight: "600",
                    }}
                  >
                    PRODUCT
                  </TableCell>
                  <TableCell
                    align="start"
                    sx={{
                      padding: "0.3rem 0.5rem",
                      color: "rgba(50, 71, 92, 0.87)",
                      fontWeight: "600",
                    }}
                  >
                    CATEGORY
                  </TableCell>
                  <TableCell
                    align="start"
                    sx={{
                      padding: "0.3rem 0.5rem",
                      color: "rgba(50, 71, 92, 0.87)",
                      fontWeight: "600",
                    }}
                  >
                    PAYMENT
                    {/* Fat&nbsp;(g) */}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "0.3rem 0.5rem",
                      color: "rgba(50, 71, 92, 0.87)",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ORDER STATUS
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "0.3rem 0.5rem",
                      color: "rgba(50, 71, 92, 0.87)",
                      fontWeight: "600",
                    }}
                  >
                    ACTIONS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productDisplayData?.map((row) => (
                  <TableRow
                    key={row?.subTitle}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ padding: "0.2rem 0.5rem" }}
                    >
                      <ListItem
                        sx={{
                          padding: "0",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src={row?.phoneurl}
                            sx={{ width: "2rem", height: "2rem" }}
                            variant="square"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <span
                                style={{
                                  color: "rgba(50, 71, 92, 0.6)",
                                  fontSize: "1rem",
                                  fontWeight: "600",
                                }}
                              >
                                {row?.title}
                              </span>
                            </Typography>
                          }
                          secondary={
                            <Typography
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <span
                                style={{
                                  color: "rgba(50, 71, 92, 0.38)",
                                  fontSize: "0.875rem",
                                  lineHeight: "1.43",
                                }}
                              >
                                {row?.subTitle}
                              </span>
                            </Typography>
                          }
                          //secondary={row?.subTitle}
                          sx={{ width: "200px" }}
                        ></ListItemText>
                      </ListItem>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        padding: "0.2rem 0.5rem",
                        color: "rgba(50, 71, 92, 0.6)",
                        textAlign: "start",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {renderCategoryIcon(row?.id)}
                        <span
                          style={{
                            marginLeft: "0.6rem",
                            lineHeight: "1.5",
                            fontSize: "1rem",
                          }}
                        >
                          {row?.categoryName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: "0.2rem 0.5rem",
                        color: "rgba(50, 71, 92, 0.6)",
                        textAlign: "start",
                      }}
                    >
                      <div
                        style={{
                          //   color: "rgb(105, 108, 255)",

                          padding: "0.2rem 0.5rem",
                          borderRadius: "0.3rem",
                        }}
                      >
                        {row?.paymentType == "Fully Paid" ? (
                          <div
                            style={{
                              color: "rgb(105, 108, 255)",
                              fontWeight: "600",
                            }}
                          >
                            ${row?.paidAmount}
                          </div>
                        ) : (
                          <div>
                            <span
                              style={{
                                color: "rgb(105, 108, 255)",
                                fontWeight: "600",
                              }}
                            >
                              ${row?.paidAmount}
                            </span>
                            <span>/</span>
                            <span style={{ color: "rgba(50, 71, 92, 0.38)" }}>
                              ${row?.fullAmount}
                            </span>
                          </div>
                        )}
                      </div>
                      <div style={{ textAlign: "start", marginLeft: "0.5rem" }}>
                        {row?.paymentType}
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        padding: "0.2rem 0.5rem",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          color: row?.statusColor,
                          backgroundColor: row?.statusbgColor,
                          padding: "0.2rem 0.5rem",
                          borderRadius: "0.3rem",
                        }}
                      >
                        {row?.status}
                      </span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: "0.2rem 0.5rem",
                      }}
                    >
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
                          <MenuItem
                            onClick={handleClose}
                            sx={{ color: "rgba(50, 71, 92, 0.87)" }}
                          >
                            <DescriptionOutlinedIcon />
                            &nbsp; View Transaction
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ color: "rgba(50, 71, 92, 0.87)" }}
                          >
                            <LocalPrintshopOutlinedIcon />
                            &nbsp; Print Invoice
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ color: "rgba(50, 71, 92, 0.87)" }}
                          >
                            <ShoppingCartOutlinedIcon />
                            &nbsp; Buy Again
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ color: "rgba(50, 71, 92, 0.87)" }}
                          >
                            <DeleteOutlineOutlinedIcon />
                            &nbsp; Delete History
                          </MenuItem>
                        </Menu>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div></div>
      </div>
    </div>
  );
}
