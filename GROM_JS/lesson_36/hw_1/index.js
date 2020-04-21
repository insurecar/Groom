let getUsersBlogs = async userList => {
    let request = userList
        .map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to load data');
            })
        )
    const userData = await Promise.all(request);
    return userData.map(user => user.blog);
}


export { getUsersBlogs }