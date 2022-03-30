const mongoose = require("mongoose");

const mongoURI = 
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    // if your atlas db
    : 'mongodb+srv://benjamin_m:Baseballbenji69@cluster0.9xnz1.mongodb.net/express-mvc?retryWrites=true&w=majority';


mongoose.connect(mongoURI)
    .then(instance => console.log(`connected to: ${instance.connections[0].name}`))
    .catch(error => console.log(`failed conn:`, error))

module.exports = mongoose