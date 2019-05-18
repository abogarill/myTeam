const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DeveloperSchema = new Schema({
    name: String, 
    project: String
});


// Export the model
module.exports = mongoose.model('Developer', DeveloperSchema);