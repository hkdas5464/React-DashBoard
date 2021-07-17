import React from 'react';
import './NewUsers.css';

function NewUsers() {
    return (
        <div className="newUser">
            <br />
            <br />
            <h1 className="newUserTitle">New User</h1>
            <form >
                <div className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="john Smit" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="Password" placeholder="Enter Password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+91-8789369732" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Address" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="Others">Other</label><input type="radio" name="gender" id="others" value="others" />
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUerSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                </div>
                <button className="newUserButton">Create</button>

            </form>
        </div>
    )
}

export default NewUsers
