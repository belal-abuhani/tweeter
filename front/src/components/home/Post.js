
import React, { useState, useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import "./post.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink, Link } from "react-router-dom"
import aaa from "./aaa.png"

import RepeatIcon from "@material-ui/icons/Repeat";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MenuOptions from "../navbar/MenuOptions";

// import CommentLike from "./commentLike"

const TweetBody = ({ tweet }) => {
    console.log(tweet)
    const isActive = useMediaQuery('(max-width:900px)')
    const [like, setLike] = useState("")
    const [retweet, setRetweet] = useState("")
    const [save, setSave] = useState("")


    const handleLike = async () => {

    }
    const handleRetweet = async () => {

    }

    const handleSave = async () => {

    }

    return (
        <div className="tweet-body">
            <div className="tweet__top" >
                <Link to="/profile" className="twet__top__image">
                    <Avatar ><img className=" avatar__image" src={tweet.userId.profileImg} /></Avatar>
                </Link>

                <div className='top__date'>
                    <h4 style={{ margin: "0px" }} >{tweet.userId.name}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>{`${tweet.createdAt.split('T')[0]} at ${tweet.createdAt.split('T')[1].split('.')[0]}`}</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
                {/* {tweetResult.caption} */}
                {tweet.caption}
            </h4>
            {
                tweet.image[0] && <img className="tweet__image" src={tweet.image[0]} />
            }
            <div className="comments-saves ">
                <h5 style={{ marginRight: "10px" }}>10 comments</h5>
                <h5 style={{ marginRight: "10px" }}>10 likes</h5>
                <h5 style={{ marginRight: "10px" }}>10 retweets</h5>
                <h5> 10 saves</h5>
            </div>
            <div className='comments-sec'>
                <MenuOptions text="Comment" Icon={ChatBubbleOutlineIcon} />
                <MenuOptions text="Retweet" Icon={RepeatIcon} />
                <MenuOptions text="Like" Icon={FavoriteBorderIcon} />
                <MenuOptions text="Save" Icon={BookmarkBorderOutlinedIcon} />
            </div>
            <div className="profile-comment" >
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={tweet.userId.profileImg} /></Avatar>
                </Link>
                {/* <SearchBar tweetid={tweetResult._id} /> */}
            </div>
            {/* {
                tweetResult.comments && tweetResult.comments.map(comment => {
                    return (
                        <CommentLike comment={comment} user={user} />
                    )
                })
            } */}
        </div>
    )

}

export default TweetBody



















// import React, { forwardRef } from "react";
// import { Avatar } from "@material-ui/core";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
// import MenuOptions from "../navbar/MenuOptions";


// const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
//     return (
//         <div className="post" ref={ref}>
//             <div className="postAvatar">
//                 <Avatar src={avatar} />
//             </div>
//             <div className="post__body">
//                 <div className="post__header">
//                     <div className="post__headerText">
//                         <h3>
//                             {"displayName"}{" "}
//                             <span className="post__headerSpecial">
//                                 {verified && <VerifiedUserIcon className="post__badge" />} @
//                   {"username"}
//                             </span>
//                         </h3>
//                     </div>
//                     <div className="post__headerDescription">
//                         <p>{text}</p>
//                     </div>
//                 </div>
//                 <img src={image} alt="" />
//                 <div className="post__footer">
//                     <MenuOptions text="Comment" Icon={ChatBubbleOutlineIcon} />
//                     <MenuOptions text="Retweet" Icon={RepeatIcon} />
//                     <MenuOptions text="Like" Icon={FavoriteBorderIcon} />
//                     <MenuOptions text="Save" Icon={BookmarkBorderOutlinedIcon} />

//                     {/* // <ChatBubbleOutlineIcon fontSize="small" />
//                         // <RepeatIcon fontSize="small" />
//                         // <FavoriteBorderIcon fontSize="small" />
//                         // <BookmarkBorderOutlinedIcon fontSize="small" /> */}
//                 </div>
//             </div>
//         </div>
//     );
// }
// );

// export default Post;
