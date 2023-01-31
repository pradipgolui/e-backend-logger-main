// Logs database model
const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({

    application_id: ObjectID,

    type: String('error','info', 'warning'),

    priority: String('lowest', 'low', 'medium', 'high', 'highest'),

    path:String,

    message:String,

    request:{data:Mixed},

    response:{data:Mixed},
    
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('logs', LogSchema);