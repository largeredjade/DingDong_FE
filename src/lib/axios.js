import axios from "axios";

const instance = axios.create({
    baseURL: `https://dingdong7.pythonanywhere.com`,
    withCredentials: true
});

export default instance;
