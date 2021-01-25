import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MenuOptions from "../navbar/MenuOptions";


const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="postAvatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}{" "}
                                <span className="post__headerSpecial">
                                    {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt="" />
                    <div className="post__footer">
                        <MenuOptions text="Comment" Icon={ChatBubbleOutlineIcon} />
                        <MenuOptions text="Retweet" Icon={RepeatIcon} />
                        <MenuOptions text="Like" Icon={FavoriteBorderIcon} />
                        <MenuOptions text="Save" Icon={BookmarkBorderOutlinedIcon} />

                        {/* // <ChatBubbleOutlineIcon fontSize="small" />
                        // <RepeatIcon fontSize="small" />
                        // <FavoriteBorderIcon fontSize="small" />
                        // <BookmarkBorderOutlinedIcon fontSize="small" /> */}
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;