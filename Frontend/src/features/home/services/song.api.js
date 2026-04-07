import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/songs",
    withCredentials: true,
});



export async function getSong({mood}){
    try {
        const response = await api.get(`?mood=${mood}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching song:", error);
        throw error;
    }
    
}