import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8081/"
})

export default class Api{

    async listProjects() {
        const resp = await api.get("/")
        return resp.data;
    }

    async addProject(req) {
        const resp = await api.post("/", req)
        return resp.data;
    }

    async switchStatus(req){
        const resp = await api.put("/alterar-status", req)
        return resp.data;
    }

    async deleteProject(id) {
        const resp = await api.delete(`/${id}`)
        return resp.data;
    }

}