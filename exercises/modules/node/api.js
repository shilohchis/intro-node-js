const { users, posts } = require('./data');

const getUserById = (id, cb) => {
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        cb(user);
    }, 150);
};


const getPostsForUser = (userId, cb) => {
    setTimeout(() => {
        const listPost = posts.filter(post => post.createdBy === userId);
        cb(listPost);
    }, 150);
};

module.exports = {
    getUserById,
    getPostsForUser
};
