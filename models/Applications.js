// Applications database model
const mongoose = require('mongoose');

const applicationsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('applications', applicationsSchema);