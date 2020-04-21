const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (response.ok == false) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
}

fetchUser('insurecar')
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));


export { fetchUser };