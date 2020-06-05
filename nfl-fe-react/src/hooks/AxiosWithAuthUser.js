import axios from "axios";

export const AxiosWithAuthUser = () => {
    const token = localStorage.getItem("token");
    console.log("AxiosWithAuthUser.js: grabbed token:", token);

    return axios.create({
    baseURL: "https://tacklemytrade-api.herokuapp.com/api",
    headers: {
        Authorization: token
    }
    });
};