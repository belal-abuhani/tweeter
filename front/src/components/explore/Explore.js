import React from 'react'
import Feed from "../home/Feed";
import Sidebar from "../home/Sidebar";
import Search from './Search'

function Explore() {
    return (
        <div className="mt-5 ">
            <div className="d-flex" style={{ width: '100vw' }}>

                <Search />
            </div>
            <div className="row d-flex  justify-content-center ">
                {/* <Sidebar /> */}
                <Feed />
            </div>
        </div>
    )
}

export default Explore
