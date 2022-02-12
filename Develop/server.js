const express = require('express');

const app = express();
// Assigns the port
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Creates routes
const notesRouter = require('./routes/notes')


app.use("/",notesRouter);

// Start the server on the port
  app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));