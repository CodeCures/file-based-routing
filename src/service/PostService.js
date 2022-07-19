import axios from "axios";


const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers: {'Content-Type': 'application/json'}
});

export const getPosts = async (perPage = 10, page = 2) => {
   return await http.get(`/posts?_limit=${perPage}&_page=${page}`);
}

export const getPost = async(id) => {
    return await http.get(`/posts/${id}`);
}
