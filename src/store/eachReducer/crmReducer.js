import { SET_CRM_DATA } from "../actions/crmAction";

function crmReducer(
  state = {
    page: "",
    customerRating: [],
    stackedBarData: [],
    crmOrder: [],
    leads: [],
    pieChartData: [],
    topSalesVolume: [],
    earningReport: [],
    revenueBarData: [],
    heat: [],
    salesCountry: [],
    teamMembers: [],
    tableCustomers: [],
  },
  action
) {
  switch (action.type) {
    case SET_CRM_DATA:
      return { ...action.payload };

    default:
      return state;
  }
}
export default crmReducer;
