import React from 'react'
import MenuOptions from "./MenuOptions"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Menu() {

    const logout = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('userId');
        window.location.replace("/");

    }

    const profile = () => {
        window.location.replace("/profile");

    }
    return (
        <div className="Menu" style={{ backgroundColor: "gray" }}>
            <div onClick={profile}>
                <MenuOptions text="My Profile" Icon={AccountCircleIcon} />

            </div>
            <MenuOptions text="Group Chat" Icon={GroupIcon} />

            <MenuOptions text="Settings" Icon={SettingsIcon} />

            <div onClick={logout}>
                <MenuOptions text="Logout" Icon={ExitToAppIcon} />
            </div>
        </div>
    )
}
