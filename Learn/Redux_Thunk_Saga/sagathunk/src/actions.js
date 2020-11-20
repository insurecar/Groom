export const GET_DATA = "GET_DATA";
export const LOAD_DATA = "LOAD_DATA";

export const getData = (datafromServer) => {
  return {
    type: GET_DATA,
    payload: datafromServer,
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};
