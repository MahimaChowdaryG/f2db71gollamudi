var Animal = require('../models/animal'); 
 
// List of all Animals
exports.animal_list = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.send(theAnimals); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

//VIEWS 
// Handle a show all view 
exports.animal_view_all_Page = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.render('animals', { title: 'Animal Search Results', res: theAnimals }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Animal. 
exports.animal_detail = function(req, res) { 
    res.send('Animal detail: ' + req.params.id); 
}; 
 
// Handle Animal create on POST. 
exports.animal_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Animal(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.lifetime = req.body.lifetime; 
    document.color = req.body.color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Animal delete form on DELETE. 
exports.animal_delete = function(req, res) { 
    res.send('Animal delete DELETE ' + req.params.id); 
}; 
 
// Handle Animal update form on PUT. 
exports.animal_update_put = function(req, res) { 
    res.send('Animal update PUT' + req.params.id); 
}; 