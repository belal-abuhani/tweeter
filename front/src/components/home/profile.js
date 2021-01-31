import React from 'react';
import Feed from './Feed';
import Header from './Header'
import Sidebar from "../home/Sidebar";

import "./home.css"

function Profile() {
    return (
        <div className="mt-5 p-3 " style={{ backgroundColor: "lightsteelblue" }}>

            <Header />
            <div className="mt-2 d-flex justify-content-center align-items-start">
                <Sidebar />
                <Feed />
            </div>
        </div>
    )
}

export default Profile
