import React from "react";

//nivo
import { ResponsiveRadialBar } from "@nivo/radial-bar";

//mui
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function ExpensesCard() {
  const data = [
    {
      //   id: "Supermarket",
      data: [
        {
          x: "Vegetables",
          y: 20,
          color: "#696CFF",
        },
        {
          x: "Fruits",
          y: 80,
          color: "#696CFF",
        },
      ],
    },
  ];
  //chart color
  const colors = {
    Supermarket: "#696CFF",
    Vegetables: "#EBEEF0 ",
    Fruits: "#696CFF",
  };
  const getColor = (bar) => colors[bar.id];
  return (
    <div>
      <div style={{ padding: "1rem 1.5rem" }}>
        <div style={{ color: "rgba(50, 71, 92, 0.6)", fontWeight: "600" }}>
          Expenses
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "12rem", height: "10rem" }}>
            <ResponsiveRadialBar
              data={data}
              keys={["Vegetables", "Fruits"]}
              valueFormat=">-.2f"
              startAngle={90}
              endAngle={-86}
              innerRadius={0.45}
              padding={0.3}
              cornerRadius={7}
              margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
              colors={{ scheme: "purple_orange" }}
              //   borderColor="#696CFF"
              tracksColor="#ebeef0"
              enableRadialGrid={false}
              enableCircularGrid={false}
              radialAxisStart={null}
              circularAxisOuter={null}
              isInteractive={false}
              legends={[]}
            />
          </div>
          <div>
            <Box
              position="absolute"
              top="30%"
              right="-19px"
              color="grey"
              textAlign="center"
              width={200}
              height={80}
            >
              <Typography variant="h6" paddingLeft="10px">
                72%
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", marginTop: "1rem" }}>
                $2k Expenses more<br></br> than last month
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
