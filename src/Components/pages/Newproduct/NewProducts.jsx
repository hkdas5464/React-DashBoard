import React from 'react';
import './NewProducts.css';

function NewProducts() {
    return (
       <div className="newProduct">
           <h1 className="addProductTitle">New Product</h1>
           <form  className="addProductForm">
               <div className="addProductItem">
                   <lable>Image</lable>
                   <input type="file" id ="file"/>
                </div>
                <div className="addProductItem">
                   <lable>Name</lable>
                   <input type="text" placeholder="Apple Airpod"/>
                </div>
                <div className="addProductItem">
                   <lable>Stock</lable>
                   <input type="text" placeholder="123"/>
                </div>

                <div className="addProductItem">
                   <lable>Active</lable>
                   <select name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
                </div>
                <button className="addProductButton">Create</button>
           </form>
       </div>
    )
}

export default NewProducts
