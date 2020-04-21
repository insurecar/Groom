const baseUrl = 'https://5e9ad146bc561b0016af4017.mockapi.io/api/v1/users';
const headersJson = { 'Content-Type': 'application/json;charset=utf-8' };
/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};




/* getUserById code here */
const getUserById = userById => {
    return fetch(`${baseUrl}/${userById}`)
        .then(response => response.json())
};


/* createUser code here */
const user = {
    email: "81600@ukr.net",
    firstName: "Rostyslav",
    lastName: "Shyian",
    age: 33,
};
const createUser = newUser => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(newUser),
    })
};
//createUser(user);

/* updateUser code here */
const updateUserInfo = {
    firstName: "Mykola",
    lastName: "Abramovych",
    age: 34,
}
const updateUser = (userId, updateUserInfo) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: headersJson,
        body: JSON.stringify(updateUserInfo),
    })
};
//updateUser('2', updateUserInfo);

/* deleteUser code here */
const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};
//deleteUser("8");
export { getUsersList, getUserById, createUser, updateUser, deleteUser };