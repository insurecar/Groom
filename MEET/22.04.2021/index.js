const baseUrl = 'https://5e98af0c5eabe7001681c458.mockapi.io/users'

function getUsersLlist() {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}

// getUsersLlist();

function getUserById(userId) {
    return fetch(`${baseUrl}/${userId}`)
        .then(response => response.json())
        .then(data => console.log(data))
}

function createUser(userData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
}

const user = {
    ag: 7,
    email: 'abigel@ukr.net',
    firstName: 'Іван',
    id: '1',
    lastName: 'King'
}

createUser(user)
    .then(response => response.text())
    .then(data => console.log(data))