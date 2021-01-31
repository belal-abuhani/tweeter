import React, { useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import WhatisHappenSearch from "./WhatIsHappening"
import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';
import "./Search.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudImage from "./ImageUpload"



const TweetSomething = () => {
    const isActive = useMediaQuery('(max-width:900px)')
    const [input, setInput] = useState("")
    const [image, setImage] = useState("")


    const handleInputChange = (data) => {
        setInput(data)
    }
    const handleImageChange = async (data) => {
        await setImage(data)
    }
    const handleButtonClick = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: localStorage.getItem("userId"), caption: input, image: image })
        };
        const res = await fetch(`/tweet`, requestOptions)
        setInput("")
        setImage("")
    }
    return (
        <div className="tweet-something">
            <h3 className='tweet-something__text'>Tweet Something </h3>
            <div className='tweet-something__body' >
                <Avatar ><img className='avatar__image' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" /></Avatar>
                <div className='text__input'>
                    <WhatisHappenSearch handleInputChange={handleInputChange} inputVal={input} />
                    <div className='last__line'>
                        <div className='last__center'>
                            <CloudImage handleImageChange={handleImageChange} />
                            {/* <ImageIcon color="primary" /> */}
                            <div className='everyone'>
                                <PublicIcon color="primary" />
                                {
                                    !isActive ?
                                        <small style={{ paddingLeft: "5px" }}>Everyone can reply</small>
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        <Button variant="contained" color="primary" style={{ marginRight: "0.5rem" }} onClick={handleButtonClick}>
                            Tweet
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TweetSomething