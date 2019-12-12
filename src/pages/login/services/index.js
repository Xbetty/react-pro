import axios from 'axios';
export function login(form) {
    return axios.post(`${window.BASE_URL}/user/userLogin`, form)
}