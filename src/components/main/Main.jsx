import React, {useEffect, useState} from 'react';
import "./Main.less"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducers";
import {pagesCreator} from "../pagesCreator";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalPage = useSelector(state => state.repos.totalPage)
    const [searchingValue, setSearchingValue] = useState("")
    const pagesCount = Math.ceil(totalPage/perPage)
    const pages = []

    pagesCreator(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchingValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchingValue, currentPage, perPage))
    }

    return (
        <div>
            <div className="search">
                <input value={searchingValue} onChange={(e) => setSearchingValue(e.target.value)} type="text"
                       placeholder={"enter name of repo"} className="search_input"/>
                <button onClick={() => searchHandler()} className="search_btn">Search</button>
            </div>
            {!isFetching ? repos.map(repo => <Repo repo={repo}/>) : <div className="fetching"/>}
            <div className="pages">
                {pages.map((el, index) => <span className={el === currentPage ? "current_page" : "page"}
                                                key={index} onClick={() => dispatch(setCurrentPage(el))}>{el}</span>)}
            </div>
        </div>
    )
}

export default Main;