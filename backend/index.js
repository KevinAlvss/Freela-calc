const express = require('express');
const server = express();
const cors = require('cors');

const ObjectId = require('mongodb').ObjectId;

server.use(cors());
server.use(express.json());

let mongoConn;

const MongoDB = require('mongodb').MongoClient
MongoDB
    .connect("mongodb+srv://devmonk:1234@cluster0.xnbim.mongodb.net",  { useUnifiedTopology: true } )
    .then(conn => {
        mongoConn = conn;
        console.log("mongo is connected ;)")
    })
    .catch(e => console.log(e))

server.get("/", async (req, resp) =>{
    try {
        let db = mongoConn.db("payflow").collection("projetos");
        let projetos = await db.find().toArray();
        resp.send(projetos);
    } catch (error) {
        resp.status(500).send({
            error: "An error has ocurred. Please try later"
        })
    }
})

server.post("/", async (req, resp) =>{
    try {
        let db = mongoConn.db("payflow").collection("projetos");
        
        const projeto = req.body;
        await db.insertOne(projeto);
        
        resp.send(projeto);
    } catch (error) {
        resp.status(500).send({
            error: "An error has ocurred. Please try later"
        })
    }
})

server.delete("/" , async (req, resp) =>{
    try {
        let db = mongoConn.db("payflow").collection("projetos");
        
        const id = req.headers["id"];
        const oid = new ObjectId(id);

        const projeto = await db.deleteOne({
            "_id" : oid 
        });
        
        resp.send(projeto);
    } catch (error) {
        resp.status(500).send({
            error: error
        })
    }
})

server.listen(process.env.PORT, () => console.log("subi"));