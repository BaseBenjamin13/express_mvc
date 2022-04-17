
require('dotenv').config()
const express = require("express");
const methodOverride = require('method-override');
const todoControllers = require('./controllers/todos');
const songControllers = require('./controllers/songs');
const app = express();




app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))




app.use("/songs", songControllers);

app.use("/todos", todoControllers);


const port = process.env.PORT || 4000;

app.listen(port, ()=> {
  
    console.log(`MVC app server ${port} running`);
});