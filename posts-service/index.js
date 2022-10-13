//require('express') returns a function reference. that function is called with express() . 
const express = require('express');

//add in a body parser to make sure that whenever a user sends us some JSON
//data in the body, the request actually gets parsed.
//And so it actually shows up appropriately inside of a request handler
const bodyParser = require('body-parser');

//Used to generate a random ID that we are going to assign to the post the user is trying to create
const { randomBytes } = require('crypto');

//app is an object returned by express(). Actually it instantiates Express and assigns app variable to it.
const app = express();

//To use the body parser
app.use(bodyParser.json());

//object to store posts that have been created
const posts = {};

// req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    //pull out the title the user create with the post
    const { title } = req.body;
    //Add in the ID with the title
    posts[id] = {
        id, 
        title
    };
    //Send message back to user stating post is good
    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('listening on 4000');
});