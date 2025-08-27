import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '6168180c32msh468da6d8165170fp11f587jsnfbc687b6b116', 'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
})

export default api;