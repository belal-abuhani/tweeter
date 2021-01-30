import React from 'react'
import { NavLink, Link } from "react-router-dom"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu"
import MenuOptions from "./MenuOptions"
// import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { Button } from '@material-ui/core';


export default function Navbar() {
    return (
        <div className="Navbar fixed-top " style={{ zIndex: "100" }}>
            <ul className="d-flex justify-content-around list-unstyled">
                <NavLink style={{ textDecoration: "none", color: "WindowText" }} to="/"><li><MenuOptions text="Tweeter" Icon={TwitterIcon} /> </li></NavLink>
                <li><ul className="list-unstyled d-flex ">
                    <NavLink style={{ textDecoration: "none", color: "WindowText" }} to="/"> <li> <MenuOptions active text="Home" Icon={HomeOutlinedIcon} /></li></NavLink>
                    <NavLink style={{ textDecoration: "none", color: "WindowText" }} to="Explore"><li><MenuOptions text="Explore" Icon={SearchIcon} /></li></NavLink>
                    <NavLink style={{ textDecoration: "none", color: "WindowText" }} to="Bookmarkes"><li><MenuOptions text="Bookmarkes" Icon={BookmarkBorderIcon} /></li></NavLink>
                </ul></li>
                <li className="dropMenu"><MenuOptions text="menu" Icon={ArrowDropDownIcon} /> <Menu /> </li>
                {/* <Button variant="outlined" className="tweetBtn" fullWidth>tweet</Button> */}

            </ul>
        </div>
    )
}
