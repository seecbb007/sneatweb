import React from "react";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export default function SalesProgressCard() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#03C3EC" : "#308fe8",
    },
  }));
  return (
    <div className="salesCard">
      <div
        className="salescard_wallet"
        style={{ color: "rgba(50, 71, 92, 0.6", fontWeight: "700" }}
      >
        Sales
      </div>
      <div
        className="salescard_amount"
        style={{ marginTop: "0.5rem", fontWeight: "600" }}
      >
        482k
      </div>
      <div
        style={{
          width: "4rem",
          height: "2rem",
          textAlign: "center",
          lineHeight: "2rem",
          backgroundColor: "rgba(3, 195, 236, 0.16)",
          color: "rgb(3, 195, 236)",
          borderRadius: "0.3rem",
        }}
      >
        +34%
      </div>
      <div
        style={{
          margin: "0.5rem 0 0.2rem 0",
        }}
      >
        Sales Target
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "rgba(50, 71, 92, 0.6)",
        }}
      >
        <BorderLinearProgress
          variant="determinate"
          value={78}
          sx={{ width: "70%" }}
        ></BorderLinearProgress>
        <span>78%</span>
      </div>
    </div>
  );
}
