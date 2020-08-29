import React, { Component } from 'react';
import HeaderNavComponent from './Header/HeaderNav';
import UserNavComponent from './Header/UserNavComponent';
import HomeComponent from './Home/HomeComponent';
import CartComponent from './Cart/CartComponent';
import OrderComponent from './Orders/OrderComponent';
import LoginComponent from './User/Login';
import SignupComponent from './User/Signup';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class EshopApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            passWord: "",
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path = "/" exact component = {HeaderNavComponent}/>
                    <Route path = "/login" exact component = {HeaderNavComponent}/>
                    <Route path = "/signup" exact component = {HeaderNavComponent}/>
                    <Route path = "/:userid/:menu" component = {UserNavComponent}/> 
                    <Switch>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="/signup" exact component={SignupComponent} />
                        <Route path="/:userid/home" exact component={HomeComponent} />
                        <Route path="/:userid/cart" component={CartComponent} />
                        <Route path="/:userid/orders" component={OrderComponent} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default EshopApp;