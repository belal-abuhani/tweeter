import React, { useState, useEffect } from "react"
import axios from "axios"
import Feed from "../home/Feed";
import Post from "../home/Post"

function Bookmarkes() {

    const [tweets, setTweets] = useState([])
    useEffect(() => {
        axios.get('/tweets',)
            .then((response) => {
                setTweets(response.data)

            });
    });
    return (
        <div style={{ backgroundColor: "lightsteelblue" }} className="mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                {tweets[0] ?
                    <Post tweet={tweets[tweets.length - 1]} />
                    : <></>}
            </div>
        </div>
    )
}

export default Bookmarkes
