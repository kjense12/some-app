import axios from "axios";

export const httpClient = axios.create({
    baseURL: "https://localhost:7099/api/v1.0",
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;