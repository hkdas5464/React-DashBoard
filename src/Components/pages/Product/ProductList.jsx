import React from 'react';
import './ProductList.css';
import ProductRows from '../dummy/ProductDummyData';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useState } from 'react';

function ProductList() {
    const [data, setdata] = useState(ProductRows);
    const handleDelete=(id)=>{
        setdata(data.filter((item)=>item.id !==id))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="userListItem">
                        <img className="productListImage" src={params.row.img} alt="" />
                        {params.row.name}              </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 250,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (parms) => {
                return (
                    <>
                        <Link to={"/product/" + parms.row.id}>
                            <button className="ProductListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productLiseDelete" onClick={()=>handleDelete(parms.row.id)}/>
                    </>
                )
            }
        }

    ];
    return (
        <div className="productList">
           
           <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={11} checkboxSelection />

            
        </div>
    )
}

export default ProductList
