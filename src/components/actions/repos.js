import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducers";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort-stars&page=${currentPage}&per_page=${perPage}`)
        dispatch(setRepos(res.data))
    }
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    setRepo(response.data)
}

export const getContributors = async (username, repoName, setContibutors) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
    setContibutors(response.data)
}