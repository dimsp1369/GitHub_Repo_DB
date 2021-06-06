const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FETCHING_ERROR = "SET_IS_FETCHING_ERROR"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    items: [],
    isFetching: true,
    isFetchingError: false,
    currentPage: 1,
    perPage: 10,
    totalPage: 0
}


export default function reposReducers(state = defaultState, action) {

    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalPage: action.payload.total_count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_IS_FETCHING_ERROR:
            return {
                ...state,
                isFetchingError: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state

    }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setIsFetching = (fetching) => ({type: SET_IS_FETCHING, payload: fetching})
export const setIsFetchingError = (fetching) => ({type: SET_IS_FETCHING_ERROR, payload: fetching})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})

