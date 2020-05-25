const baseUrl = "https://5e9ad146bc561b0016af4017.mockapi.io/api/v1/users1";

let rootElement = document.querySelector("#root");

const newUser = {
  firstName: "VASYL",
  lastName: "VAELMYK",
  email: "Simon@Velmyk.ly",
  phone: "(231)644-3486",
  address: {
    streetAddress: "3303 Street",
    city: "Kyiv",
    state: "IN",
    zip: "65677",
  },
  description: "Nash Vasya",
};

const addUser = async (user) => {
  const fet1 = await fetch(baseUrl);
  const dataUser = await fet1.json().then((data) => data);

  dataUser.find(({ firstName, lastName, id }) => {
    if (user.firstName == firstName && user.lastName == lastName) {
      const deleteVasya = (id) => {
        return fetch(`${baseUrl}/${id}`, {
          method: "DELETE",
        });
      };
      deleteVasya(id);
    }
  });

  let fet = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("You are crazy fool!!!");
    }
  });
};
addUser(newUser);
