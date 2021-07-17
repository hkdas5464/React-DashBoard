import React from 'react';
import './Navbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-wrapper">
                    <div className="top-left">
                        <span className="logo"><img src="https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png" alt="" className="logo" /></span>
                    </div>
                    <div className="top-right">
                        <div className="navbarIconContainer">
                            <NotificationsNoneIcon />
                            <span className="topIconbach">
                                2
                            </span>
                        </div>
                        <div className="navbarIconContainer">
                            <LanguageIcon />
                            <span className="topIconbach">
                                2
                            </span>
                        </div>
                        <div className="navbarIconContainer">
                            <SettingsIcon />

                        </div>
                        <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
