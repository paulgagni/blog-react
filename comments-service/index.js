//app is an object returned by express(). Actually it instantiates Express and assigns app variable to it.
const express = require('express');
//To use the body parser
const bodyParser = require('body-parser');
//Used to generate a random ID that we are going to assign to the post the user is trying to create
const { randomBytes } = require('crypto');

const cors = require('cors');

//Create express application
const app = express();
//To use the body parser
app.use(bodyParser.json());

//Wire up cors as middleware - ensure call cors as a function
app.use(cors());

//Object to store all comments in an in-memory data structure
const commentsByPostId = {};


// req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.
//Get request handler
app.get('/posts/:id/comments', (req, res) => {
    //Look inside of the commentsByPostId object, look up the ID that was provided inside the path and if not create an empty array so we do not get an undefined
    res.send(commentsByPostId[req.params.id] || []);
});

//Post request handler
app.post('/posts/:id/comments', (req, res) => {
    //Generate comment ID
    const commentId = randomBytes(4).toString('hex');
    //Pull out comment content provided by user
    const { content } = req.body;
    //Check to see if we already have an array by post ID and if not create an empty array so we do not get an undefined
    const comments = commentsByPostId[req.params.id] || [];
    //Push in the comments we create into the array
    comments.push({ id: commentId, content })
    //Assign comments array back to the given post inside of our commentsByPostId object
    commentsByPostId[req.params.id] = comments;
    //Send back the entire array of comments
    res.status(201).send(comments);
});

//Need to specify a different port since ports is already using 4000
app.listen(4001, () => {
    console.log('listening on 4001');
});