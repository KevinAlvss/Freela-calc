import e from "express";
import ProjectDatabase from "../database/projectDatabase.js";
const db = new ProjectDatabase();

export default class ProjectService{
    async listProjects(){
        return await db.listProjects();
    }

    async addProject(projeto){
        if(projeto === null){
            throw 'Projeto vazio'
        }

        return await db.addProject(projeto);
    }

    async deleteProject(id){
        if(id === null){
            throw 'Projeto não encontrado'
        }

        return await db.deleteProject(id);
    }
}