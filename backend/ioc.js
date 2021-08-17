import ProjectDatabase from "./src/database/projectDatabase.js";

export default function inject(connectionString){
    ProjectDatabase.inject(connectionString)
}