import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.css';
import Home from './Components/pages/Home/Home';
import { BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import UserList from './Components/pages/UserList/UserList';
import User from './Components/pages/user/user';
import NewUsers from './Components/pages/newUsers/newuser';
import ProductList from './Components/pages/Product/ProductList';
import Product from './Components/pages/ProductPage/Product';
import NewProducts from './Components/pages/Newproduct/NewProducts';

function App() {
  return (
  <Router>
    <Navbar/>
    <br/>
    <br/>
    <div className="container">
      <Sidebar/>

      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        
        <Route path="/users">
         <UserList/>
        </Route>
        <Route path="/user/:usersId">
         <User/>
        </Route>
        <Route path="/newuser">
         <NewUsers/>
        </Route>
        <Route path="/products">
         <ProductList/>
        </Route>
        <Route path="/product/:productsId">
         <Product/>
        </Route>
        <Route path="/newproduct">
          <NewProducts/>
        </Route>
        
        
      </Switch>

      
    </div>
  </Router>
      )
}

export default App
