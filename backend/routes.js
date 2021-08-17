import cors from 'cors';
import ProjectController from './src/controller/projectController.js';

export default function configureRoutes(express, server){
    server.use(cors())
    server.use(express.json())
    server.use("/", ProjectController)
}