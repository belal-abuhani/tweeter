import React, { useState, useEffect } from "react"
import Post from './Post';
import Header from './Header'
import Sidebar from "../home/Sidebar";
import axios from "axios"


import "./home.css"

function Profile() {

    const [tweets, setTweets] = useState([])
    useEffect(() => {
        var id = localStorage.getItem("userId")
        axios.get(`/tweets/${id}`,)
            .then((response) => {
                setTweets(response.data)

            });

        // console.log(tweets)

    });



    return (
        <div className="mt-5 p-3 " style={{ backgroundColor: "lightsteelblue" }}>

            <Header />
            <div className="row ">

                <Sidebar />

                <div className="col-md-6 mt-2 d-flex flex-column justify-content-center align-items-center">

                    {tweets.map((tweet, i) => {
                        return <Post key={i} tweet={tweet} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Profile
