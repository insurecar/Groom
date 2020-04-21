
const baseUrl = 'https://5e9ad146bc561b0016af4017.mockapi.io/api/v1/users';


const request = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users')
    .then(onSuccess);

console.log(request);
request
    .then(onSuccess)
    .then(data => console.log(data))
/* getUsersList code here */

/* getUserById code here */

/* createUser code here */

/* updateUser code here */

/* deleteUser code here */