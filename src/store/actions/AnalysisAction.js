export const SET_ANALYSIS_STACKEDBAR_DATA = "SET_ANALYSIS_STACKEDBAR_DATA";

export const setAnalysisData = (data) => {
  return {
    type: "SET_ANALYSIS_STACKEDBAR_DATA",
    payload: data,
  };
};
