import React from 'react';
import TweetBox from "./TweetBox";
import Feed from "./Feed";
import CustomizedInputBase from "../explore/TweetSome"


import "./home.css"

function Home() {
    return (
        <div className="mt-5 p-3 " style={{ backgroundColor: "lightsteelblue" }}>

            <CustomizedInputBase />
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <Feed />
            </div>


            {/* <Post /> */}

        </div>
    )
}

export default Home
