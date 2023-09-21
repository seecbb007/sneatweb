import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import create from "../../asset/create.png";
import logo from "../../asset/logo.png";
import "./css/login.css";
import { setLoginData } from "../../store/actions/loginAction";

//mui grid 2
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

//mui input
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//mui checkbox
import Checkbox from "@mui/joy/Checkbox";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";

export default function Register() {
  const [user, setUser] = useState({ userName: "", email: "", password: "" });

  // const [message, setMessage] = useState([]);
  const handleChange = (e) => {
    let title = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [title]: value });
  };
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (validation(user) !== true && validation(user) !== []) {
    } else {
      axios
        .post("http://127.0.0.1:8000/api/v1/register", user)
        .then((res) => {
          let loginUser = { email: user.email, password: user.password };

          axios
            .post("http://127.0.0.1:8000/api/v1/login", loginUser)
            .then((res) => {})
            .catch((error) => {
              console.log("Account created, could not logined in", error);
            });
          navigate("/dashboards/analytics");
          dispatch(setLoginData(true));
        })

        .catch((error) => {
          console.log("Register Account Fail,Check error: ", error);
        });
    }
  };

  //Redirect to the dashboard analysis pages
  const navigate = useNavigate();
  // useEffect(()=>{

  // })

  //Check Fullname, Password, Email Reg

  const validation = (user) => {
    let message = [];
    let matchfullName = `^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$`;
    let regfullName = new RegExp(matchfullName, "i");

    let matchEmail = `^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$`;
    let regEmail = new RegExp(matchEmail, "i");

    // AT least one upper case, one lower case, minimum 8 in length
    let matchPassword = `^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$`;
    let regPassword = new RegExp(matchPassword, "i");

    let passwordlengthValidation = `.{8,}`;
    let regPassword_length = new RegExp(passwordlengthValidation, "i");

    let passwordUppercaseValidation = `(?=.*?[A-Z]).{8,}`;
    let regPassword_uppercase = new RegExp(passwordUppercaseValidation, "g");

    if (
      regfullName.test(user.userName) === false &&
      user.userName?.length !== 0
    ) {
      message.push("Name should be at least 4 characters. ");
    }

    //Email
    if (regEmail.test(user.email) === false && user.email?.length !== 0) {
      message.push("Email is not valid. ");
    }

    //Password
    if (
      regPassword_length.test(user.password) === false &&
      user.password?.length !== 0
    ) {
      message.push("Password length should be at least 8 characters. ");
    } else if (
      regPassword_uppercase.test(user.password) === false &&
      user.password?.length !== 0
    ) {
      message.push("Password should contain at least 1 uppercase letter. ");
    }

    return message.length > 0 ? message : true;
  };

  //mui grid  2
  const theme = useTheme();
  const cardBackgroundColor = "white";
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
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
                <img src={create} className="registerimg"></img>
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
                <div className="login_Title">Adventure starts here 🚀</div>
                <div className="login_subTitle">
                  Make your app management easy and fun!
                </div>

                <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                  <form onSubmit={(e) => submit(e)} action="" method="post">
                    <TextField
                      id="outlined-search"
                      label="Username"
                      type="search"
                      sx={{ m: 1 }}
                      fullWidth
                      placeholder="johnjoe"
                      name="userName"
                      onChange={(e) => handleChange(e)}
                    />
                    <TextField
                      id="outlined-search"
                      label="Email"
                      type="search"
                      sx={{ m: 1 }}
                      fullWidth
                      placeholder="user@email.com"
                      name="email"
                      onChange={(e) => handleChange(e)}
                    />
                    <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                      <InputLabel htmlFor="standard-adornment-password">
                        Password
                      </InputLabel>

                      <OutlinedInput
                        name="password"
                        onChange={(e) => handleChange(e)}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>

                    {validation(user)?.length > 0 && (
                      <Box
                        sx={{
                          margin: "1rem 0 1rem 0.5rem",
                          backgroundColor: "#E57373",
                          borderRadius: "0.5rem",
                          padding: "1rem",
                          color: "white",
                          fontWeight: 500,
                        }}
                      >
                        {validation(user)?.map((eachMessage) => {
                          return (
                            <div style={{ margin: "5px 0" }}>
                              * {eachMessage}
                            </div>
                          );
                        })}
                      </Box>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1rem 0 0 0.5rem",
                        gap: 6,
                        width: "100%",
                      }}
                      fullWidth
                    >
                      <Checkbox
                        label={
                          <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                            I agree to
                            <span className="createAccount_butt">
                              &nbsp; privacy policy & terms
                            </span>
                          </Typography>
                        }
                        defaultChecked
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        width: "100%",

                        margin: "2rem 0 1rem 0",
                      }}
                    >
                      {/* <Link to="/dashboards/analytics"></Link> */}
                      <Button
                        fullWidth
                        sx={{
                          background: "#696CFF",
                          boxShadow: "rgba(105, 108, 255, 0.4) 0px 2px 4px 0px",
                          transition: "all 0.2s ease-in-out 0s",
                          ":hover": {
                            bgcolor: "#6062E8",
                            transform: "translateY(-1px)",
                          },
                        }}
                        type="submit"
                      >
                        SIGN UP
                      </Button>
                    </Box>
                  </form>

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
                      Already have an account?
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <span className="createAccount_butt">
                          &nbsp; Sign in instead
                        </span>
                      </Link>
                    </Typography>
                    <Divider> or </Divider>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "1rem 0 1.5rem 0",
                    }}
                  >
                    <IconButton variant="plain">
                      <svg
                        t="1694034158683"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4026"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M512.262115 959.556658c247.175132 0 447.569968-200.366167 447.569968-447.556658 0-247.16387-200.394836-447.556658-447.569968-447.556658-247.17718 0-447.556658 200.392788-447.556658 447.556658-0.001024 247.190491 200.378454 447.556658 447.556658 447.556658"
                          fill="#537BBC"
                          p-id="4027"
                        ></path>
                        <path
                          d="M404.292383 436.216104h46.269378v-44.969044c0-19.828563 0.499656-50.408946 14.904699-69.347753 15.172957-20.05689 36.000832-33.690947 71.826579-33.690946 58.371702 0 82.952117 8.326235 82.952118 8.326235l-11.564785 68.550147s-19.285904-5.576079-37.275569-5.57608c-17.99888 0-34.111763 6.449454-34.111764 24.438095v52.269346h73.791416l-5.152191 66.958004h-68.639225v232.604221h-86.731278V503.174108h-46.269378v-66.958004z"
                          fill="#FFFFFF"
                          p-id="4028"
                        ></path>
                      </svg>
                    </IconButton>
                    <IconButton variant="plain">
                      <svg
                        t="1694034246143"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5861"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4 35.4-21.1 62.3-54.4 75-94-32.7 19.5-69.7 33.8-108.2 41.2C765.4 194.6 721.1 174 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5-14.8 25.4-23.2 54.4-23.2 86.1 0 59.2 30.1 111.4 76 142.1-28-1.1-54.4-9-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4-14.3 3.7-29.6 5.8-44.9 5.8-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-0.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-0.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
                          fill="#1296DB"
                          p-id="5862"
                        ></path>
                      </svg>
                    </IconButton>
                    <IconButton variant="plain">
                      <svg
                        t="1694034273262"
                        viewBox="0 0 1049 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="6833"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z"
                          fill="#191717"
                          p-id="6834"
                        ></path>
                        <path
                          d="M199.040177 753.571326c-0.869171 2.607513-5.215026 3.476684-8.691711 1.738342s-6.084198-5.215026-4.345855-7.82254c0.869171-2.607513 5.215026-3.476684 8.691711-1.738342s5.215026 5.215026 4.345855 7.82254z m-6.953369-4.345856M219.900283 777.038945c-2.607513 2.607513-7.82254 0.869171-10.430053-2.607514-3.476684-3.476684-4.345855-8.691711-1.738342-11.299224 2.607513-2.607513 6.953369-0.869171 10.430053 2.607514 3.476684 4.345855 4.345855 9.560882 1.738342 11.299224z m-5.215026-5.215027M240.760389 807.459932c-3.476684 2.607513-8.691711 0-11.299224-4.345855-3.476684-4.345855-3.476684-10.430053 0-12.168395 3.476684-2.607513 8.691711 0 11.299224 4.345855 3.476684 4.345855 3.476684 9.560882 0 12.168395z m0 0M269.443034 837.011749c-2.607513 3.476684-8.691711 2.607513-13.906737-1.738342-4.345855-4.345855-6.084198-10.430053-2.607513-13.037566 2.607513-3.476684 8.691711-2.607513 13.906737 1.738342 4.345855 3.476684 5.215026 9.560882 2.607513 13.037566z m0 0M308.555733 853.526c-0.869171 4.345855-6.953369 6.084198-13.037566 4.345855-6.084198-1.738342-9.560882-6.953369-8.691711-10.430053 0.869171-4.345855 6.953369-6.084198 13.037566-4.345855 6.084198 1.738342 9.560882 6.084198 8.691711 10.430053z m0 0M351.145116 857.002684c0 4.345855-5.215026 7.82254-11.299224 7.82254-6.084198 0-11.299224-3.476684-11.299224-7.82254s5.215026-7.82254 11.299224-7.82254c6.084198 0 11.299224 3.476684 11.299224 7.82254z m0 0M391.126986 850.049315c0.869171 4.345855-3.476684 8.691711-9.560882 9.560882-6.084198 0.869171-11.299224-1.738342-12.168395-6.084197-0.869171-4.345855 3.476684-8.691711 9.560881-9.560882 6.084198-0.869171 11.299224 1.738342 12.168396 6.084197z m0 0"
                          fill="#191717"
                          p-id="6835"
                        ></path>
                      </svg>
                    </IconButton>
                    <IconButton variant="plain">
                      <svg
                        t="1694034312472"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7830"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512"
                          fill="#FBBC05"
                          p-id="7831"
                        ></path>
                        <path
                          d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88"
                          fill="#EA4335"
                          p-id="7832"
                        ></path>
                        <path
                          d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776"
                          fill="#34A853"
                          p-id="7833"
                        ></path>
                        <path
                          d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667"
                          fill="#4285F4"
                          p-id="7834"
                        ></path>
                      </svg>
                    </IconButton>
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
