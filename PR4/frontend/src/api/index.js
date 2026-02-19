import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const api = {
    getProducts: async () => {
        const res = await apiClient.get("/products");
        return res.data;
    },
};