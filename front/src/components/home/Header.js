import React from 'react'
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';

function Header() {
    return (
        <div className="Header">
            <div className="cover">
            </div>

            <div className="profile d-felx">
                <div className="d-flex align-items-center">
                    <div className="profile-photo">
                    </div>
                    <div className="name d-flex justify-content-between">
                        <div className="d-flex">
                            <span>Belal AbuHani</span>
                            <span>54654Followinng</span>
                            <span>646546 followers</span>
                        </div>
                        <div>
                            <Button>follow</Button>

                        </div>

                    </div>
                </div>
                <div className="info">

                    <div className="disc">
                        here discrip me
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Header
