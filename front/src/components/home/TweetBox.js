import React from 'react'
import { Button, Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';


function TweetBox() {
    return (
        <div className="TweetBox">
            <p>tweet somthing </p>
            <form>
                <div className="tweetInput">
                    <Avatar src=""> </Avatar>
                    <input placeholder="What's in your mind" type="text" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <PublicIcon />
                        <PanoramaOutlinedIcon />
                    </div>
                    <Button className="tweetBtn">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
