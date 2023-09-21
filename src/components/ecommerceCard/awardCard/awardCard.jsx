import React from "react";
import "./awardCard.css";
import awardPng from "../../../asset/award.png";
//mui
import Button from "@mui/material/Button";

export default function AwardCard({ bestSeller }) {
  return (
    <div>
      <div className="award">
        <div className="award_title">
          Congratulations {bestSeller?.awardName}!
        </div>
        <div className="award_subTitle">Best seller of the month</div>
        <div className="award_detail">
          <div className="award_allnumber">
            <div className="award_amount">${bestSeller?.awardAmount}k</div>
            <div className="award_subTitle">
              {bestSeller?.awardTarget}% of target
            </div>

            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#696CFF",
                color: "white",
                boxShadow: "rgba(105, 108, 255, 0.4) 0px 2px 4px 0px",
                transition: "all 0.2s easeInOut 0s",
                ":hover": {
                  bgcolor: "#6062E8",
                  border: "1px solid rgba(105, 108, 255,1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              VIEW SALES
            </Button>
          </div>

          <img
            src={awardPng}
            style={{ width: "30%", height: "9.6rem" }}
            className="awardPng"
          ></img>
        </div>
      </div>
    </div>
  );
}
