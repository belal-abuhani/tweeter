import React, { useState, useEffect } from "react"
import axios from "axios"

// import { tweet } from '../../../../controller/tweet';
import Post from "./Post"

function Feed() {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        axios.get('/tweets',)
            .then((response) => {
                setTweets(response.data)

            });
    });

    return (
        <div className="col-md-7">
            {tweets.map((tweet, i) => {
                return <Post key={i} tweet={tweet} />
            })}
        </div>
    )
}

export default Feed
