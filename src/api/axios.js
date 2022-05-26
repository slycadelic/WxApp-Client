import axios from 'axios';
const BASE_URL = 'ec2-13-233-71-124.ap-south-1.compute.amazonaws.com:3500';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
