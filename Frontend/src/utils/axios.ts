import axios from "axios";

export const axiosNonAuth = axios.create();
const axiosAuth = axios.create();

export default axiosAuth;
