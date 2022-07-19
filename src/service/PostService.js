import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers: {'Content-Type': 'application/json'}
});

export const getPost = async () => {
    try {
        const response = await instance.get({
            url: '/posts',
        });
        console.log(response.data);
    } catch(error) {
       throw new Error('An error occured');
    }
}
