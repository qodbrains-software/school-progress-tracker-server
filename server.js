import express from 'express';
const server = express();
const PORT = 9000;
import {database} from './data/database.mock.js';
 
server.get("/get-data", (req,res) => {
    res.json(database);
})


server.listen(PORT, (err) => {
    if(err){
    console.log(`server error`);
}
console.log(`this server is listening to port ${PORT}`);
})
    