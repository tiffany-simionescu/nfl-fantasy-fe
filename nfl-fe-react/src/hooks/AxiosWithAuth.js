import axios from "axios";

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("fan-token");
    console.log("AxiosWithAuthUser.js: grabbed token:", token);

    return axios.create({
    baseURL: "https://tacklemytrade-api.herokuapp.com/api",
    headers: {
        Authorization: token
        }
    });
};