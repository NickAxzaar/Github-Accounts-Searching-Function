import React from 'react'
import './GithubCard.css'

const GithubCard = ({ user }) => {
    return (
        <div className="github-card">
            <img src={user.avatar_url} className='github-avatar' />
            <h2>{user.name}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">View Profile on
                Github </a>

            <ul>
                <li><b>Followers:</b>{user.followers}</li>
                <li><b>Following:</b>{user.following}</li>
            </ul>
        </div >
    )
}

export default GithubCard