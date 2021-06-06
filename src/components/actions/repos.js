import axios from "axios";
import {setIsFetching, setIsFetchingError, setRepos} from "../../reducers/reposReducers";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort-stars&page=${currentPage}&per_page=${perPage}`)
            dispatch(setRepos(res.data))
        } catch (e) {
            dispatch(setIsFetchingError(true))
            dispatch(setIsFetching(false))
            setTimeout(() => dispatch(setIsFetchingError(false)),2000)
        }
    }
}

export const getCurrentRepo = (username, repoName, setRepo) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
        setRepo(response.data)
    }
}

export const getContributors = (username, repoName, setContibutors) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
        setContibutors(response.data)
        dispatch(setIsFetching(false))
    }
}