import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getContributors, getCurrentRepo} from "../actions/repos";
import "./Card.less"
import "../../utils/Loader.less"
import {useDispatch, useSelector} from "react-redux";

const Card = (props) => {
        const isFetching = useSelector(state => state.repos.isFetching)
        const dispatch = useDispatch()

        const {username, reponame} = useParams() // необходим для получения отдельных частей URL запроса
        const [repo, setRepo] = useState({owner: {}})
        const [contributors, setContributors] = useState([])

        useEffect(() => {
            dispatch(getCurrentRepo(username, reponame, setRepo))
            dispatch(getContributors(username, reponame, setContributors))
        }, [])



        return (
            <div>
                <button className="back_btn" onClick={() => props.history.goBack()}>Back</button>
                {!isFetching ? <>
                        <div className="card">
                            <img src={repo.owner.avatar_url} alt="" className="img"/>
                            <div className="name">{repo.name}</div>
                            <div className="stars">{repo.stargazers_count}</div>
                        </div>
                        {contributors.map((el, index) => <div key={index}>{index + 1}. {el.login}</div>)}
                    </>
                    : <div className="fetching"/>}
            </div>
        );
    }
;

export default Card;