import React from "react";
import johntyping from "../../../asset/johntyping.png";
import "./overviewcard.css";

//mui
import Button from "@mui/material/Button";

export default function Overviewcard() {
  return (
    <div className="analytics_overview">
      <div className="overview">
        <div className="overview_userinfo">
          <div className="ov_user">Congratulations John! 🎉 </div>
          <div className="ov_content">
            You have done 72% more sales today.
            <br /> Check your new badge in your profile.
          </div>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid rgba(105, 108, 255, 0.5)",
              color: "rgb(105, 108, 255)",
              width: "10rem",
              transition: "all 0.8s linear",
              marginTop: "0.5rem",
              ":hover": {
                bgcolor: "#F9F9FF",
                border: "1px solid rgba(105, 108, 255,1)",
                transform: "translateY(-1px)",
              },
            }}
          >
            VIEW BADGES
          </Button>
        </div>
        <div className="overview_pic">
          <img
            src={johntyping}
            style={{ width: "206px", height: "170px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
