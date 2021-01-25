import React from 'react'
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

export default function Navbar() {
    return (
        <div className="Navbar">
            <ul className="d-flex justify-content-around list-unstyled">
                <li><MenuOptions text="Tweeter" Icon={TwitterIcon} /> </li>
                <li><ul className="list-unstyled d-flex ">
                    <li> <MenuOptions text="Home" Icon={HomeOutlinedIcon} /></li>
                    <li><MenuOptions text="explre" Icon={SearchIcon} /></li>
                    <li><MenuOptions text="Bookmarkes" Icon={BookmarkBorderIcon} /></li>
                </ul></li>
                <li className="dropMenu"><MenuOptions text="menu" Icon={ArrowDropDownIcon} /> <Menu /> </li>
            </ul>
        </div>
    )
}
