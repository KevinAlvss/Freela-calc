import { ObjectId } from 'mongodb'

let db;

export default class ProjectDatabase{
    static inject(connectionString){
        db = connectionString.db("payflow").collection("projetos");
    }

    async listProjects(){
        return await db.find().toArray();
    }

    async addProject(projeto){
        return await db.insertOne(projeto);
    }

    async switchStatus(id, status){
        const objectId = ObjectId(id);

        return await db.updateOne(
            {
              "_id" : objectId
            },
            {
              $set : {
                  "encerrado": status
                }
            }
          );
    }

    async deleteProject(id){
        const objectId = ObjectId(id);

        return await db.deleteOne({
            "_id" : objectId  
        });
    }
}