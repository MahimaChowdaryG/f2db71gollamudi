const mongoose = require("mongoose") 
const animalSchema = mongoose.Schema({ 
 name: String, 
 lifetime: { type: Number, min: 1, max: 1000 }, 
 color: { type: String, minLength : 2}  
}) 
 
module.exports = mongoose.model("Animal", 
animalSchema)