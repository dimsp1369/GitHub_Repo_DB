import React, {useEffect, useState} from 'react';
import "./Main.less"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const [searchingValue, setSearchingValue] = useState("")

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(searchingValue))
    }

    return (
        <div>
            <div className="search">
                <input value={searchingValue} onChange={(e) => setSearchingValue(e.target.value)} type="text"
                       placeholder={"enter name of repo"} className="search_input"/>
                <button onClick={() => searchHandler()} className="search_btn">Search</button>
            </div>
            {!isFetching ? repos.map(repo => <Repo repo={repo}/>) : <div className="fetching"/>}
        </div>
    )
}

export default Main;