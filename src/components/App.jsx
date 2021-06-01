import React from 'react';
import "./App.less"
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";


const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <div className="title">List of the repos from GitHub</div>
                <Route path="/" component={Main}/>
            </div>
        </BrowserRouter>
    );
};

export default App;