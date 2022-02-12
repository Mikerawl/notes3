const path = require(path);
const router = express('express').Router();
const fs = require("fs");
// const {v4:uuidv4} = require("uuid");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
 

