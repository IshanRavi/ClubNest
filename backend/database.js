const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/clubnest_data';

exports.connectMongodb=()=>{
    mongoose.connect(uri,{})
    .then(e=>{
        process.stdout.write(`Connect to MongoDB Successfully: ${e.connection.port}`)
    })
    .catch(e=>{
        process.stdout.write(`Error DB connectivity ${e}`);
    })
}



const CodingClub = new mongoose.Schema({
    name_of_events: {
        type: String,
        required: true,
    },
    name_of_host_institute: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: String,
        required: true,
    },
    date_of_event: {
        type: Date,
        required: true,
    },
    Details_of_prizes_won: {
        type: String,
    },
    Venue:{
        type:String,
        required:true
    },
    Speaker:{
        type:String,
        required:true
    } ,
    Objective:{
        type:String 
    }
});


exports.User = mongoose.model("CodingClub", CodingClub);