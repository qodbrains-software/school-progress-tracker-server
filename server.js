const express = require('express');
const bodyParser = require("body-parser")
const server = express();
const port = 9000;

// server.use(express.json);
server.use(bodyParser.json());
    

    const callbackfunction = (err) => {
        if(err){
        console.log(`server error`);
    }
    console.log(`this server is listening to port ${port}`);
    }
    
    server.listen(port, callbackfunction)
    