import { SET_ECOMMERCE_DATA } from "../actions/ecommerceActions";

function ecommerceReducer(
  state = {
    type: "",
    bestSeller: {},
    visitorsActivity: {},
    analyticsSales: [],
    transactionCard: [],
    revenueCard: [],
    reportIep: [],
    conversionRate: {},
    stackedBarData: [],
    phoneProductData: [],
    balanceData: [],
  },
  action
) {
  switch (action.type) {
    case SET_ECOMMERCE_DATA:
      return { ...action.payload };
    default:
      return state;
  }
}
export default ecommerceReducer;
