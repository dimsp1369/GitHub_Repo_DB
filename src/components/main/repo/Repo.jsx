import React from 'react';
import "./Repo.less"

const Repo = ({repo}) => {
    return (
        <div className="repo">
            <div className="repo_header">
                <div className="repo_header_name">{repo.name}</div>
                <div className="repo_header_stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo_last_commit">Дата последнего коммита: {repo.updated_at}</div>
            <span className="repo_link"> Ссылка на репозиторий: <a href={repo.html_url}>{repo.html_url}</a> </span>

        </div>
    );
};

export default Repo;