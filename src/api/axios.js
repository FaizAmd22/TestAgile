import axios from "axios";

export const API = axios.create({
    baseURL: "https://restfulcountries.com/api/v1",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 1000|Um4mQ1mtoY8vH0qDA3gNRDtMAZHCXm8sHzYj1XsA"
    },
})