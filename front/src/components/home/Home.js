import React from 'react';
import Sidebar from "./Sidebar";
import TweetBox from "./TweetBox";
import Feed from "./Feed";
import Post from "./Post";

import "./home.css"

function Home() {
    return (
        <div>
            <TweetBox />
            <Sidebar />
            <Feed />
            <Post />

        </div>
    )
}

export default Home
