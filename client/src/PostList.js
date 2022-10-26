//useEffect ensures that we only try to fetch our list of posts one time when our component is first created
//useState allows us to track state in a function component
import React, { useState, useEffect } from 'react';
//Axios to make the post request
import axios from 'axios';


export default () => {
    //Declare a new peice of state called post and the starting value is an empty object
    //posts is the current state and setPosts is the function to update the state
    const [posts, setPosts] = useState({});
    //Function to make the request to the post service
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    //The empty array is what tells react to only run the function one time 
    useEffect(() => {
        fetchPosts();
    }, []);

    //Line that tests our functions
    //console.log(posts);
    //Object Values is a built in function JavaScript that's going to give us back an array of all the values inside of this object right here. So it's going to essentially be an array of actual post objects
    //Map over the array and for every post inside, generate some x and return it from this mapping function
    //React expects a key property in the list of elements, we are going to use a key of the post object post.id
    const renderedPosts = Object.values(posts).map(post =>  {
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px' }}
            key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        );
    });


    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>;
};