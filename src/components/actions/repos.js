import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducers";

export const getRepos = (searchQuery = "stars:%3E1") => {
    if(searchQuery == '') {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort-stars`)
        dispatch(setRepos(res.data))
    }
}