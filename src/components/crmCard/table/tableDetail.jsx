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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function TableDetail({ tableCustomerData }) {
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];
  //dropdown dots
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
      <div className="tableDetail">
        <div className="tableDetail_Container">
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ padding: "0.3rem 0.5rem" }}>
                    CUSTOMER
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "0.3rem 0.5rem" }}>
                    AMOUNT
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "0.3rem 0.5rem" }}>
                    STATUS
                    {/* Fat&nbsp;(g) */}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "0.3rem 0.5rem" }}>
                    PAID BY
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "0.3rem 0.5rem" }}>
                    ACTIONS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableCustomerData?.map((row) => (
                  <TableRow
                    key={row?.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ padding: "0 0.5rem" }}
                    >
                      <ListItem
                        sx={{
                          padding: "0",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src={row?.imgurl}
                            sx={{ width: "2rem", height: "2rem" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={row?.title}
                          secondary={row?.subtitle}
                          sx={{ width: "200px" }}
                        ></ListItemText>
                      </ListItem>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        padding: "0 0.5rem",

                        textAlign: "center",
                      }}
                    >
                      ${row?.amount}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: "0 0.5rem",
                        color: "rgba(50, 71, 92, 0.6)",
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
                      align="right"
                      sx={{
                        padding: "0px",

                        // dispaly: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // backgroundColor: "yellow",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={row?.paidBy}
                        sx={{
                          margin: "0 0 0 2rem",
                          width: "3rem",
                          height: "3rem",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: "0 0.5rem",
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
                            <PersonOutlineOutlinedIcon />
                            &nbsp; Customer Profile
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
