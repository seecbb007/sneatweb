export const SET_CRM_DATA = "SET_CRM_DATA";

export const setCrmData = (data) => {
  return {
    type: "SET_CRM_DATA",
    payload: data,
  };
};
