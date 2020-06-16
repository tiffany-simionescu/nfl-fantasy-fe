import axios from "axios";

export const AxiosWithAuth = () => {
    const authToken = localStorage.getItem("fan-token");
    console.log("AxiosWithAuthUser.js: grabbed token:", authToken);

    return axios.create({
    baseURL: "https://tacklemytrade-api.herokuapp.com/api",
    headers: {
        authToken: authToken
        }
    });
};