// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';
// export function getUserData(userId) {
//     return fetch(`${baseUrl}/users/${userId}`).then(response => {
//         if (!response.ok) {
//             throw new Error('Can not find a user');
//         }
//         return response.json();
//     });
// }
// getUserData('7')
//     .then(userData => console.log(userData))
//     .catch(error => {
//         alert(error)
//     })





const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';
async function getUserData(userId) {
    try {
        const response = await fetch(`${baseUrl}/users/${userId}`);
        console.log(response);
        if (!response.ok) {
            throw new Error('Can not find user');
        }
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Problems with fetch')
    }
}




getUserData('2')
    .then(userData => console.log(userData))
    .catch(error => {
        alert(error)
    })






export function printUserData(userId) {
    getUserData(userId)
        .then(userData => {
            console.log(userData);
        })
        .catch(error => {
            console.log(error.message);
        });
}

