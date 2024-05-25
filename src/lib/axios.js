import axios from "axios";

const instance = axios.create({
    baseURL: `https://dingdong7.pythonanywhere.com`
});

export default instance;