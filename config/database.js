// MongoDB database connection here
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url = 'mongodb://127.0.0.1:27017/test-commerce';

const connectDB = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected....');
        
    } catch (error) {
     console.error(error.message);
    
     // For database system failure
     process.exit(1);
        
    }
}

module.exports = connectDB;