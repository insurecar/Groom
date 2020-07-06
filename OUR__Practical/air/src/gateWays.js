const baseUrl = "https://api.iev.aero/api/flights/01-07-2020";

export const getFetchFlights = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) return response.json();

    throw new Error("Failed to load");
  });

// const getData = () => {
//   getFetchFlights().then(
//     (data) => console.log(data)
//     //   setFlights({
//     //     qw: data.body.departure[0].ID,
//     //   })
//   );
// };
// document.addEventListener("DOMContentLoaded", getData());
