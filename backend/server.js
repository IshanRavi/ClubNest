const express = require('express');
const cors = require('cors');
const { connectMongodb,CodingClub, RoboticsClub } = require('./database');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.json());

connectMongodb();
app.use(cors());

// registration of users
app.post('/coding-club', async (req, res) => {
    try {
        // const user = await CodingClub.findOne({ username: req.body.username });
        console.log(req.body, " inside try block body value");
        // if (user) return res.status(400).send('This user already exists');
        
        const newUser = await CodingClub.create(req.body);
        res.send(newUser); // Send back the newly created user
    } catch (error) {
        console.error("Error creating new user:", error);
        res.status(500).send("Error creating new user");
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

// pair completed
app.get('/hello-world',(req,res)=>{
    res.send("Hello world3");
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.post('/robotics-club', async (req, res) => {
    try {
        // const user = await CodingClub.findOne({ username: req.body.username });
        console.log(req.body, " inside try block body value");
        // if (user) return res.status(400).send('This user already exists');
        
        const newUser = await RoboticsClub.create(req.body);
        res.send(newUser); // Send back the newly created user
    } catch (error) {
        console.error("Error creating new user:", error);
        res.status(500).send("Error creating new user");
    }
});


app.get('/robotics-club', async(req, res) => {
    try{
        const value = await RoboticsClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});