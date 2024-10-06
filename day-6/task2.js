function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({userId, username: 'john_doe'});
        }, 1000);
    });
}

function fetchPosts(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}

fetchUser(1)
    .then((user) => {
        console.log('User:', user);
        return fetchPosts(user.username);
    })
    .then((posts)=> {
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });