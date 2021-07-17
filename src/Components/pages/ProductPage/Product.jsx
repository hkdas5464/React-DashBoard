import { Link } from 'react-router-dom';
import React from 'react';
import './Product.css';
import Chart from '../../Chart/Chart';
import { productData } from './dummyData';
import { Publish } from '@material-ui/icons';
function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product </h1>
                <Link to="/newproduct"><button className="productButton">Create</button></Link>


            </div>
            <div className="productTop">
                <div className="productleft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productRight">
                    <div className="productInfoTop">
                        <img
                            src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="apple"
                            className="productInfoimage" />
                        <span className="productName">Apple Airpod</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock: </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">YES</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="inStock" id="active">
                            <option value="yes">YES</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="apple" className="productUpoadimage" />
                            <lable for="file">
                                <Publish/>
                            </lable>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                    <div className="productFormRight"></div>
                </form>

            </div>
        </div>
    )
}

export default Product
