import React from 'react';
import "./App.less"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./Error";


const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <div className="title">List of the repos from GitHub</div>
                <Switch>
                    <Route exact path="/" component={Main}/> // параметр exact указывает на необходимость полного совподения пути
                    <Route path="/card/:username/:reponame" component={Card}/>
                    <Route path="/error" component={Error}/>
                    <Redirect to="/"/> /* параметр для перенаправления на главную страницу при несуществующем пути */
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;