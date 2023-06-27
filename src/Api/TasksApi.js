import axios from "axios";

const api = {
    getAllTasks: async function(params) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}tasks`, {
                params: {
                    _sort: "createAt",
                    _order: "desc",
                    ...params
                }
            });
            return res
        } catch (e) {
            console.log('error')
        }
    },
    postTask: async function(a) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}tasks`, a)
        } catch (e) {
            console.log('error')
        }
    }
}

export default api;