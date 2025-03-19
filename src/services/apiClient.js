import axios from 'axios';

const api = axios.create({
    baseURL: "https://gymflowback.onrender.com"
})

export default api;