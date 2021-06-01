 import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
 import reposReducers from "./reposReducers";
 import {composeWithDevTools} from "redux-devtools-extension";
 import thunk from "redux-thunk";


const rootReducer = combineReducers( {
    repos: reposReducers
})

 export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))