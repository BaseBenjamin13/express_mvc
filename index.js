
const express = require("express");
const methodOverride = require('method-override');
const todoControllers = require('./controllers/todos');
const songControllers = require('./controllers/songs');
const app = express();
const ejsLayouts = require('express-ejs-layouts');



app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))




app.use("/songs", songControllers);

app.use("/todos", todoControllers);


const port = process.env.PORT || 4000;

app.listen(port, ()=> {
  
    console.log(`MVC app server ${port} running`);
});


//mongodb+srv://benjamin_m:<password>@cluster0.9xnz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongodb+srv://benjamin_m:Baseballbenji69@cluster0.9xnz1.mongodb.net/deployDB?retryWrites=true&w=majority