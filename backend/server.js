const express = require('express');
const cors = require('cors');
const { connectMongodb,CodingClub } = require('./database');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectMongodb();
app.use(cors());


// image upload logic and function
// codingclub start

const codingStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const codingUpload = multer({ storage: codingStorage }).single('dispImage');

app.post('/coding-club', async (req, res) => {
    try {
        codingUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new CodingClub({
                name_of_events: req.body.name_of_events,
                name_of_host_institute:req.body.name_of_host_institute,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Details_of_prizes_won:req.body.Details_of_prizes_won,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                dispImage: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('Successfully done');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/coding-club', async(req, res) => {
    try{
        const value = await CodingClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});

// coding club end
app.get('/hello-world',(req,res)=>{
    res.send("Hello world3");
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})