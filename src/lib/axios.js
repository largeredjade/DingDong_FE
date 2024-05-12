import axios from "axios";

const instance = axios.create({
    baseURL: `http://dingdong.com/api`
});

export default instance;