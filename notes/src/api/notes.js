import axios from 'axios';
const BASE_URL = 'http://localhost:3001'

export const getNotes = () => {
    return axios.get(`${BASE_URL}/notes`)
};