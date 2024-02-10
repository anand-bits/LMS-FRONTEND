import axios from "axios";

const Base_Url="http://localhost:9000/api/v1";


const axiosInstance= axios.create();

axiosInstance.defaults.baseURL= Base_Url;

axiosInstance.defaults.withCredentials=true;

export default axiosInstance;
