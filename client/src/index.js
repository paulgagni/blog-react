//looks for a folder named react inside the node_modules directory, takes all the code from there, and assigns it to the given variable name. In this case, the variable name is React itself.
import React from 'react';
//looks for a folder named react-dom inside the node_modules directory, takes all the code from there, and assigns it to the given variable name. In this case, the variable name is ReactDOM itself.
import ReactDOM from 'react-dom';
//Get the App component
import App from './App';

//ReactDOM is a package that provides methods that can be used to interact with the DOM, which is needed to insert or update React elements.
//The render method can be called the primary gateway between React and the DOM.
ReactDOM.render(
    //Show instance of the app component
    <App />,
    //Render the root react component from public/index.js
    document.getElementById('root')
)