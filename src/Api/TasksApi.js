import axios from "axios";

const api = {
    getAllTasks: async function() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}tasks`);
            return res
        } catch (e) {
            console.log('error')
        }
    }
}

export default api;