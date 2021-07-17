import React from 'react';
import './Sidebar.css';
import { ChatBubbleOutline, DoneAllRounded, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenue">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li className="sidebarListItem active">
                            
                            <LineStyle className="sidebaricon" />
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebaricon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebaricon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenue">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link" >
                        <li className="sidebarListItem active">
                            <PermIdentity className="sidebaricon" />
                            User
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebaricon" />
                            Products
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <DoneAllRounded className="sidebaricon" />
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebaricon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenue">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutline className="sidebaricon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebaricon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebaricon" />
                            Message
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenue">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <WorkOutline className="sidebaricon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebaricon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebaricon" />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
