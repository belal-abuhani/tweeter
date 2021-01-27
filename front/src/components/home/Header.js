import React from 'react'
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';

function Header() {
    return (
        <div>
            <div className="row py-5 px-4">
                <div className="col-md-12 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">

                        </div>
                        <div className="bg-light col-md-8 m-auto p-4 d-flex justify-content-start text-center">
                            <div className="media align-items-center">
                                <div className="profile mb-80 mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="mb-2 img-thumbnail rounded-250" /><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>

                            </div>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">Belal abuhani</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i></small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


        </div>













        // <div classNameName="Header">
        //     <div classNameName="cover">
        //     </div>

        //     <div classNameName="profile d-felx">
        //         <div classNameName="d-flex align-items-center">
        //             <div classNameName="profile-photo">
        //             </div>
        //             <div classNameName="name d-flex justify-content-between">
        //                 <div classNameName="d-flex">
        //                     <span>Belal AbuHani</span>
        //                     <span>54654Followinng</span>
        //                     <span>646546 followers</span>
        //                 </div>
        //                 <div>
        //                     <Button>follow</Button>

        //                 </div>

        //             </div>
        //         </div>
        //         <div classNameName="info">

        //             <div classNameName="disc">
        //                 here discrip me
        //             </div>

        //         </div>
        //     </div>



        // </div>

    )
}

export default Header
