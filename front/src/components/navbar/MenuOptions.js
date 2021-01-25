import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function MenuOptions({ text, Icon }) {
    if (Icon !== ArrowDropDownIcon) {
        return (
            <div className="menuOptions">
                <Icon />
                <h2>{text}</h2>
            </div>
        )
    }
    return (
        <div className="menuOptions">
            <h2>{text}</h2>
            <Icon />


        </div>


    )
}
