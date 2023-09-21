import { SET_ANALYSIS_STACKEDBAR_DATA } from "../actions/AnalysisAction";

function TotalRevenueReducer(
  state = {
    page: "",
    stackedBarData: {},
    pieChartData: {},
    revenueBarData: {},
    orderStatisPieData: {},
    activityTimeline: {},
    bscUserData: {},
    analyticsSales: [],
  },
  action
) {
  switch (action.type) {
    case SET_ANALYSIS_STACKEDBAR_DATA:
      return { ...action.payload };

    default:
      return state;
  }
}
export default TotalRevenueReducer;
