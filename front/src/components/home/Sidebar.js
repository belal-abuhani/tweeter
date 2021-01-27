import React from 'react'

function Sidebar() {
    return (
        <div className="col-md-4 justify-content-end" >
            <div className="px-4 py-3 w-75 ">
                {/* <h5 className="mb-0">About</h5> */}
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">Tweets</p>
                    <p className="font-italic mb-0">Tweets & replies</p>
                    <p className="font-italic mb-0">Media</p>
                    <p className="font-italic mb-0">Likes</p>

                </div>
            </div>
            {/* <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5><a href="#" className="btn btn-link text-muted">Show all</a>
                </div>

            </div> */}
        </div>
    )
}

export default Sidebar
