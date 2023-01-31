// Authorizations database model
const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
    application_id: ObjectID,

    token:String,
    
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('authorizations', authorizationSchema);