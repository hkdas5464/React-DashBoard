import React, { useState } from 'react';
import './UserList.css';
import Userrows from '../dummy/dummydata';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';


function UserList() {
    const [data, setdata] = useState(Userrows);

    const handleDelete=(id)=>{
        setdata(data.filter((item)=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'User', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.lastNuserName}              </div>
                )
            }
        },
        { field: 'email', headerName: 'E-mail', width: 200 },
        {
            field: 'status',
            headerName: 'status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 250,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (parms) => {
                return (
                    <>
                        <Link to={"/user/" + parms.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userLiseDelete" onClick={()=>handleDelete(parms.row.id)}/>
                    </>
                )
            }
        }

    ];
    return (
        <div className="userList">
            <br />
            <br />
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={11} checkboxSelection />
        </div>
    )
}

export default UserList
