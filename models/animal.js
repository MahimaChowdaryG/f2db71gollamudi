const mongoose = require("mongoose") 
const animalSchema = mongoose.Schema({ 
 name: String, 
 lifetime: Number, 
 color: String 
}) 
 
module.exports = mongoose.model("Animal", 
animalSchema)