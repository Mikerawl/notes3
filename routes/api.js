const { triggerAsyncId } = require('async_hooks');
const fs = require('fs');
const { v4:uuidv4 } = require('uuid');

let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))

module.exports = function(app) {
    app.get('/api/notes', function(req, res) { 
        res.json(data);
    }) 

    app.get('/api/notes/:id', function(req, res) { 
        res.json(data[Number(req.params.id)]);
    }) 

    app.post('/api/notes', function(req, res) { 
       let newNote = req.body;
       let noteId = uuidv4();

       newNote.id=noteId
       console.log(newNote);
    
       data.push(newNote);

       try {
           fs.writeFileSync("./db/db.json", JSON.stringify(data))
       } catch (error) {
           console.error(error)
       }
       res.json(data);
    }) 



}