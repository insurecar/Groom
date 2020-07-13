import moment from "moment";
const baseUrl = `https://api.iev.aero/api/flights`;

export const getFlightsFetch = () => {
  return fetch(`${baseUrl}/${moment().format("DD-MM-YYYY")}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    }
  );
};
