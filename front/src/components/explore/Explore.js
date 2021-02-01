import React, { useState, useEffect } from "react"
// import Feed from "../home/Feed";
// import Sidebar from "../home/Sidebar";
import Post from '../home/Post';

import Search from './Search'
import axios from "axios"

function Explore() {

    const [tweets, setTweets] = useState([])
    const [userName, setuserName] = useState("")


    const send = (search) => {

        setTweets("")
        setuserName("")
        axios.get(`/user/${search}`)
            .then((response) => {
                setTweets(response.data.tweets)
                setuserName(response.data.name)
            });

    }
    return (
        <div className="mt-5 ">
            <div className="d-flex" style={{ width: '100vw' }}>

                <Search send={send} />
            </div>
            <div className="row  d-flex  justify-content-center ">
                {/* <Sidebar /> */}

                <div className=" col-md-6">


                    {tweets && tweets.map((tweet, i) => {
                        return <Post key={i} tweet={tweet} userName={userName} />

                    })}
                </div>
            </div>
        </div>
    )
}

export default Explore
