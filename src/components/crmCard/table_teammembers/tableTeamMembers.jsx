import React from "react";

//mui table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//mui dropdown
import Typography from "@mui/material/Typography";
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

//mui
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function TableTeamMembers({ tableTeamData }) {
  //dropdown dots
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const rows = [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     createData("Eclair", 262, 16.0, 24, 6.0),
  //     createData("Cupcake", 305, 3.7, 67, 4.3),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];

  return (
    <div>
      <div
        className="tableTeam"
        style={{
          padding: "1rem 1.5rem",
        }}
      >
        <div
          className="tableTeamTitleContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "color: rgba(50, 71, 92, 0.87)",
            fontSize: "1.25rem",
          }}
        >
          <div>Team Members</div>
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
        <div className="tableContainer">
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "none", padding: "0" }}>
                    NAME
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", padding: "0" }}
                  >
                    PROJECT
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", padding: "0" }}
                  >
                    TASKS
                    {/* Fat&nbsp;(g) */}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", padding: "0" }}
                  >
                    PROGRESS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableTeamData?.map((row) => (
                  <TableRow
                    key={row?.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ padding: "0px ", border: "none" }}
                    >
                      <ListItem
                        sx={{
                          padding: "0",

                          //   backgroundColor: "red",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={row?.imgurl} />
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
                        padding: "0px",
                        border: "none",
                      }}
                    >
                      <span
                        style={{
                          color: row?.color,
                          backgroundColor: row?.bgColor,
                          borderRadius: "5px",

                          padding: "0.2rem 0.6rem",
                        }}
                      >
                        {row?.project}
                      </span>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        padding: "0px",
                        border: "none",
                        color: "rgba(50, 71, 92, 0.6)",
                      }}
                    >
                      {row?.tasks}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ padding: "0px", border: "none" }}
                    >
                      <CircularProgress
                        variant="determinate"
                        value={row?.progress}
                        size={"1.6rem"}
                        sx={{
                          color: row?.color,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
