import React from 'react';
import Sidebar from "./Sidebar";
import TweetBox from "./TweetBox";
import Feed from "./Feed";
import Post from "./Post";
import Header from "./Header";


import "./home.css"

function Home() {
    return (
        <div>
            <Header />
            <div className="row">
                <Sidebar />
                <Feed />
            </div>

            {/* <Post /> */}

        </div>
    )
}

export default Home
