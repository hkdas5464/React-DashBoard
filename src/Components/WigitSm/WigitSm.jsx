import { Visibility } from '@material-ui/icons';
import React from 'react';
import './WigitSm.css';

function WigitSm() {
    return (
        <div className="widgetSm"> 
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://avatars2.githubusercontent.com/u/63789292?v=4" alt="userImage" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engg</span>
            </div>
            <button className="widgetSmjButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
        </ul>
        </div>
    )
}

export default WigitSm;
