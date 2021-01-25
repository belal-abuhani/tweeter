import React from 'react'
import MenuOptions from "./MenuOptions"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Menu() {
    return (
        <div className="Menu">
            <MenuOptions text="My Profile" Icon={AccountCircleIcon} />
            <MenuOptions text="Group Chat" Icon={GroupIcon} />
            <MenuOptions text="Settings" Icon={SettingsIcon} />
            <MenuOptions text="Logout" Icon={ExitToAppIcon} />
        </div>
    )
}
