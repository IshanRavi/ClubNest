const mongoose = require('mongoose');
const uri = 'mongodb://0.0.0.0:27017/clubnest_data';

const connectMongodb=()=>{
    mongoose.connect(uri,{})
    .then(e=>{
        process.stdout.write(`Connect to MongoDB Successfully: ${e.connection.port}`)
    })
    .catch(e=>{
        process.stdout.write(`Error DB connectivity ${e}`);
    })
}



//coding club schema.
const CodingClubSchema = new mongoose.Schema({
    name_of_events: {
        type: String,
        required: true,
        unique:true,
    },
    name_of_host_institute: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: Number,
        required:true
    },

    Details_of_prizes_won: {
        type: String,
    },
    Date_of_event_start: {
        type: Date,
    },
    Date_of_event_end: {
        type: Date,
    },
    dispImage: {
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

const CodingClub = mongoose.model("CodingClub", CodingClubSchema);


// ai schema



const RoboticsClubSchema = new mongoose.Schema({
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

const RoboticsClub = mongoose.model("RoboticsClub", RoboticsClubSchema);


// ai schema

module.exports = {
    RoboticsClub: RoboticsClub,
    CodingClub: CodingClub,
    connectMongodb:connectMongodb
};
