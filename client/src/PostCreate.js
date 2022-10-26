import React, { useState } from 'react';
//This is used to make our actual request
import axios from 'axios';

//Export a functional component
export default () => {
    //Initalize to be an empty string
    const [title, setTitle] = useState('');
    //Define the onSubmit function
    const onSubmit = async (event) => {
        //prevent the default action - By default the browser will try to submit the form 
        event.preventDefault();
        //make the request to the post microservice
        await axios.post('http://localhost:4000/posts', {
            title
        });
        //reset the title input to an empty string
        setTitle(''); 
    };

    //add onChange anytime an event occurs with classic two-way property binding
    //add an event listener on the form itself and listen for a submission event anytime this occurs we will make a post request to the api
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};