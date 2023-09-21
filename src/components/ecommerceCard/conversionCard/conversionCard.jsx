import React from "react";

//mui dropdown box
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

//mui list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

//nivo line
import { ResponsiveLine } from "@nivo/line";

export default function ConversionCard({ conversionData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: "1.5rem 1rem", width: "100%", height: "100%" }}>
      <div className="topProductsTitle">
        <div style={{ fontWeight: "500", fontSize: "1.5rem" }}>
          Conversion Rate
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
            <MenuItem onClick={handleClose}>Update</MenuItem>
          </Menu>
        </Box>
      </div>
      <div className="orderS_subtitle">Compared To Last Month</div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "700", fontSize: "1.9rem" }}>
            {conversionData?.rate.number}%
          </div>
          {conversionData?.rate.growth === "positive" ? (
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                marginLeft: "1rem",
                display: "flex",
                alignItems: "center",
                color: "#71DD37",
              }}
            >
              <svg
                t="1693456391939"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11247"
                width="30"
                height="20"
              >
                <path
                  d="M209.922057 592.317257l38.498826 39.621393 277.219789-285.306978 277.223882 285.306978 38.497802-39.621393L525.640672 267.394003 209.922057 592.317257zM209.922057 592.317257"
                  fill="#71DD37"
                  p-id="11248"
                ></path>
              </svg>
              {conversionData?.rate.growthPercentage}%
            </div>
          ) : (
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                marginLeft: "1rem",
                display: "flex",
                alignItems: "center",
                color: "#FF3E1D",
              }}
            >
              <svg
                t="1693634765510"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4232"
                width="20"
                height="20"
              >
                <path
                  d="M769.716596 958.708971H254.282381c-104.211457 0-188.992375-84.781942-188.992376-188.992375V254.282381C65.290005 150.070924 150.071947 65.290005 254.282381 65.290005h515.434215c104.211457 0 188.992375 84.781942 188.992375 188.992376v515.434215c0 104.211457-84.780919 188.992375-188.992375 188.992375zM254.282381 99.652628c-85.259826 0-154.629753 69.37095-154.629753 154.629753v515.434215c0 85.259826 69.37095 154.629753 154.629753 154.629753h515.434215c85.259826 0 154.629753-69.37095 154.629753-154.629753V254.282381c0-85.259826-69.37095-154.629753-154.629753-154.629753H254.282381z"
                  fill="#696CFF"
                  p-id="4233"
                ></path>
                <path
                  d="M821.132616 348.145142c-0.073678-2.007727-0.382717-4.01443-1.180895-5.94234-0.007163-0.017396-0.021489-0.031722-0.029676-0.049118-0.059352-0.144286-0.172939-0.251733-0.237407-0.393973-0.777713-1.725294-1.838881-3.235694-3.087315-4.579295-0.407276-0.438998-0.858554-0.787946-1.308809-1.181919a16.867156 16.867156 0 0 0-3.581571-2.412956c-0.545422-0.276293-1.051959-0.556679-1.62808-0.773619-1.901303-0.716314-3.892657-1.212618-6.000668-1.212618H622.536512c-9.488095 0-17.181311 7.693216-17.181311 17.181311s7.693216 17.181311 17.181311 17.181311H762.602571L486.228033 642.334417 369.516892 525.624299c-6.711865-6.711865-17.58347-6.711865-24.295336 0L207.773114 663.072741c-6.711865 6.711865-6.711865 17.58347 0 24.295335 3.355421 3.355421 7.751544 5.033643 12.147668 5.033644s8.792247-1.678222 12.147668-5.033644l125.301797-125.301797L474.081389 678.777421c6.711865 6.711865 17.58347 6.711865 24.295336 0l288.522206-288.522206v140.075269c0 9.488095 7.693216 17.181311 17.181311 17.181311 9.488095 0 17.181311-7.693216 17.181311-17.181311V348.779591c-0.001023-0.226151-0.12075-0.411369-0.128937-0.634449z"
                  fill="#696CFF"
                  p-id="4234"
                ></path>
              </svg>
              {conversionData?.rate.growthPercentage}%
            </div>
          )}
        </div>

        {/* <svg
          t="1693456204247"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="35694"
          width="125"
          height="100"
        >
          <path
            d="M940.373333 433.436444L967.111111 56.888889l-248.718222 283.932444 63.886222 26.680889c-88.405333 124.814222-204.970667 252.472889-278.300444 215.836445a275.512889 275.512889 0 0 0-40.106667-16.156445c-149.219556-47.331556-302.421333 29.582222-443.619556 100.465778L0 677.831111l62.976 110.250667 78.791111 128.853333s0-2.844444 78.734222-81.578667c118.840889-118.897778 158.151111-108.657778 224.312889-91.477333 17.294222 4.494222 36.408889 9.443556 59.164445 12.686222 4.949333 0.739556 9.841778 1.251556 14.734222 1.536 126.293333 8.647111 204.174222-121.571556 262.940444-233.699555l67.527111-129.024 91.192889 38.058666z"
            fill="#696CFF"
            p-id="35695"
          ></path>
        </svg> */}
        <svg
          t="1693634999617"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="14670"
          width="100"
          height="100"
        >
          <path
            d="M929.408 202.752l-205.269333 24.661333a8.234667 8.234667 0 0 0-4.864 13.994667l61.141333 60.928-232.96 232.32-104.874667-104.533333a16.469333 16.469333 0 0 0-23.296 0l-331.52 330.752a8.234667 8.234667 0 0 0 0 11.605333l46.336 46.464a8.277333 8.277333 0 0 0 11.648 0l285.184-284.288 104.789334 104.533333c6.485333 6.357333 16.896 6.357333 23.296 0l279.722666-278.784 61.098667 60.970667c4.821333 4.821333 13.226667 1.962667 14.037333-4.821333l24.746667-204.8a8.106667 8.106667 0 0 0-9.216-9.002667z"
            fill="#696CFF"
            p-id="14671"
          ></path>
        </svg>
      </div>
      <div className="orderS_list">
        <List
          sx={{
            width: "100%",
            maxWidth: 440,
            bgcolor: "background.paper",
          }}
        >
          {conversionData?.coversionDetail?.map((eachItem) => {
            return (
              <ListItem sx={{ padding: "0px" }}>
                <ListItemText
                  primary={eachItem?.title}
                  secondary={eachItem?.subTitle}
                  sx={{ width: "200px", padding: "0.25rem 0" }}
                />

                {eachItem?.growth === "positive" ? (
                  <>
                    <ListItemText
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        t="1693457926304"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="13600"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M542.08 429.44V672a32 32 0 0 1-64 0v-242.56l-105.28 105.28a32 32 0 0 1-45.12-45.12l156.8-156.8a31.936 31.936 0 0 1 49.92-1.6l158.4 158.4a32 32 0 0 1-45.44 45.12l-105.28-105.28z"
                          fill="#71DD37"
                          p-id="13601"
                        ></path>
                      </svg>
                    </ListItemText>
                    <ListItemText
                      sx={{
                        color: "rgba(50, 71, 92, 0.38)",

                        width: "3rem",
                      }}
                    >
                      {eachItem?.percentage}%
                    </ListItemText>
                  </>
                ) : (
                  <>
                    <ListItemText
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        t="1693457898786"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="12562"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M478.4 595.2V352a32 32 0 1 1 64 0v242.56l104.96-104.96a32 32 0 1 1 45.12 45.12l-156.48 156.48a31.936 31.936 0 0 1-25.6 12.8 32 32 0 0 1-22.72-9.28l-160-160a32 32 0 0 1 45.12-45.12l105.6 105.6z"
                          fill="#FF3E1D"
                          p-id="12563"
                        ></path>
                      </svg>
                    </ListItemText>

                    <ListItemText
                      sx={{
                        width: "3rem",

                        color: "rgba(50, 71, 92, 0.38)",
                      }}
                    >
                      {eachItem?.percentage}%
                    </ListItemText>
                  </>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
