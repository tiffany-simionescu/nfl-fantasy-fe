import axios from "axios";

export const AxiosWithAuth = () => {
    const url = 'https://tacklemytrade-api.herokuapp.com/api';
    const cors ='https://cors-anywhere.herokuapp.com/';

    const authToken = localStorage.getItem("fan-token");
    console.log("AxiosWithAuthUser.js: grabbed token:", authToken);

    return axios.create({
    baseURL: cors + url,
    headers: {
        authToken: authToken
        }
    });
};