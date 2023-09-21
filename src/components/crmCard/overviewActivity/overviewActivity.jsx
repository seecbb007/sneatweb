import React from "react";
import "./overviewActivity.css";
import { useSelector } from "react-redux";

//import components
import Stackedbarchart from "../../card/totalrevenue/stackedbarchart";
export default function OverviewActivity() {
  //Get Data from  main db_CRM Backend data
  const data = useSelector((state) => {
    return state.crmReducer.data;
  });
  const stackedBarChartData = data?.stackedBarData;
  const whichPage = data?.page;

  return (
    <div>
      <div className="orderStatisticCard">
        <div className="orderS_title">
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Overview & Sales Activity
          </div>
        </div>
        <div className="orderS_subtitle" style={{ marginTop: "0.8rem" }}>
          Check out each column for more details
        </div>
      </div>
      <div>
        {stackedBarChartData !== undefined && whichPage !== undefined && (
          <Stackedbarchart data={stackedBarChartData} />
        )}
      </div>
    </div>
  );
}
