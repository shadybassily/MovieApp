import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://api.themoviedb.org/3/movie/'
})
