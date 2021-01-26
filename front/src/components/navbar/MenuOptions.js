import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function MenuOptions({ active, text, Icon }) {
    if (Icon !== ArrowDropDownIcon) {
        return (
            <div className={`menuOptions ${active && 'menuOptions--active'}`}>
                <Icon />
                <h2 style={{ marginLeft: "5px" }}>{text}</h2>
            </div>
        )
    }
    return (
        <div className="menuOptions">
            <h2 style={{ marginRight: "3px" }}>{text}</h2>
            <Icon />


        </div>


    )
}
