import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import forgotP from "../../asset/forgotPassword.png";
import logo from "../../asset/logo.png";
import "./css/login.css";

//mui grid 2
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

//mui input
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//mui checkbox
import Checkbox from "@mui/joy/Checkbox";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

export default function FortgotPassword() {
  //mui grid  2
  const theme = useTheme();
  const cardBackgroundColor = "white";
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  //mui input adornment
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login_Container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          display="grid"
          gridTemplateColumns={"repeat(12, 1fr)"}
          gridAutoRows="80px"
          // gap={"20px"}
          width="100%"
          minWidth={"50%"}
          margin="0 auto"
          minHeight="110vh"
        >
          {isSmallScreen ? (
            <div></div>
          ) : (
            <Grid
              item
              order={1}
              gridColumn={"span 6"}
              minWidth={"40rem"}
              sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: "35rem",
              }}
            >
              {/* <div
                className="registerimg"
                style={{ backgroundImage: `url(${register})` }}
              ></div> */}
              <div
                style={{
                  overflow: "hidden",
                  minHeight: "100vh",
                  height: "110vh",
                  width: "60vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  background: "#F5F5F9",
                }}
              >
                <img src={forgotP} className="registerimg"></img>
              </div>
            </Grid>
          )}

          <Grid
            item
            order={2}
            bgcolor={cardBackgroundColor}
            gridColumn={isSmallScreen ? "span 12" : "span 6"}
            // width={"100%"}
            minWidth={"25rem"}
          >
            <div className="information" style={{ marginTop: "5rem" }}>
              <div className="inforContainer">
                <div className="webTitleContainer">
                  <img src={logo} className="webLogo"></img>
                  <span className="web_Title">sneat</span>
                </div>
                <div className="login_Title">Forgot Password? 🔒</div>
                <div className="login_subTitle">
                  Enter your email and we′ll send you instructions to <br></br>
                  reset your password
                </div>

                <Box
                  sx={{ flexWrap: "wrap", width: "100%", marginLeft: "-8px" }}
                >
                  {/* <TextField
                      label="Email"
                      id="outlined-start-adornment"
                      sx={{ m: 1 }}
                      variant="outlined"
                      InputProps={{}}
                      defaultValue="admin@sneat.com"
                      fullWidth
                    /> */}
                  {/* <TextField
                      id="outlined-search"
                      label="Username"
                      type="search"
                      sx={{ m: 1 }}
                      fullWidth
                      placeholder="johnjoe"
                    /> */}
                  <TextField
                    id="outlined-search"
                    label="Email"
                    type="search"
                    sx={{ m: 1, width: "100%" }}
                    fullWidth
                  />

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      width: "100%",

                      margin: "2rem 0 1rem 0",
                    }}
                  >
                    <Button
                      fullWidth
                      sx={{
                        width: "100%",
                        background: "#696CFF",
                        boxShadow: "rgba(105, 108, 255, 0.4) 0px 2px 4px 0px",
                        transition: "all 0.2s ease-in-out 0s",
                        marginLeft: "5px",
                        padding: "0",
                        ":hover": {
                          bgcolor: "#6062E8",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      SEND RESET LINK
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                    fullWidth
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        margin: "1.5rem 0",
                        color: "rgba(50, 71, 92, 0.6)",
                      }}
                    >
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <span
                          className="createAccount_butt"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            t="1694065305301"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4015"
                            width="20"
                            height="20"
                          >
                            <path
                              d="M758.101333 868.416l-60.352 60.352L283.584 514.56 697.749333 100.416l60.352 60.352L404.266667 514.56z"
                              fill="#696CFF"
                              p-id="4016"
                            ></path>
                          </svg>
                          &nbsp; Back to login
                        </span>
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
