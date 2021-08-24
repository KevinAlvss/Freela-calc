import { Router } from 'express';
import ProjectService from '../service/projectService.js';

const router = Router();
const service = new ProjectService();

router.get("/", async (req, resp) =>{
    try {

        let projetos = await service.listProjects(); 
        resp.send(projetos);

    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})

router.post("/", async (req, resp) =>{
    try {
        
        const projeto = req.body;
        const projetoInserido = await service.addProject(projeto);
        
        resp.send(projetoInserido);

    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})

router.put("/alterar-status", async (req, resp) =>{
    try {
        
        const projeto = req.body;
        const projetoAlterado = await service.switchStatus(projeto);

        resp.send(projetoAlterado);

    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})

router.delete("/" , async (req, resp) =>{
    try {
        
        const id = req.headers["id"];
        const projeto = await service.deleteProject(id);
        
        resp.send(projeto);
    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})

export default router;