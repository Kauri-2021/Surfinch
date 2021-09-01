const express = require('express');
const app = express();
const path = require('path');

// const { getUserInfo } = require('./models/getUserInfo');
const { getUsersBirdInfo } = require('./models/getUsersBirdInfo');
const { postUserBird } = require('./models/postUserBird');
const fileUpload = require('express-fileupload');

const { getUserInfo } = require('./models/getUserInfo');
const { createBird, getEntries } = require('./models/birdEntries');

const port = 3333;
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true
}));

app.use(express.static('public'));

// get a particular user's profile info
app.get('/user/:userid', getUserInfo);

//get users saved birds info
app.get('/userbirds/:userid', getUsersBirdInfo);

//post a bird by user
app.post('/bird', postUserBird);

app.post('/createBird', createBird);
app.get('/entries', getEntries);




app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});