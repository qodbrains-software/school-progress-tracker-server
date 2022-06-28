import express from 'express';
const server = express();
const PORT = 9000;
import { database } from './data/database.mock.js';

server.use(express.json());
 
server.get("/get-data", (req, res) => {
    res.json(database);
});

server.post("/login", (req, res) =>{
    const { loginId, password } = req.body;
    let found = false;
            
    database.teachers.forEach(item =>{
        if(item.loginId === loginId && item.password === password){
            found = true;
            return;
        };
  });
        if(found){
            res.json("teacher login in");
        }else {
        res.status(401).json("You are not allowed in here.");
    };  
});
    
    
server.listen(PORT, (err) => {
    if(err){
    console.log(`server error`);
  };
console.log(`this server is listening to port ${PORT}`);
});
    