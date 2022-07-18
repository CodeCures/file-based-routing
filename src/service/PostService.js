const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 3000,
    headers: {'Content-Type': 'application/json'}
});

const getPost = () => {

}