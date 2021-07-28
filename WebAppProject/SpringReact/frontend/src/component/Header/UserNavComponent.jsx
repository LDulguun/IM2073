import React, { Component } from 'react';
import UserService from '../../service/UserService';

class UserNavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoggedIn: true
        }
        this.openHome = this.openHome.bind(this);
        this.openCart = this.openCart.bind(this);
        this.openOrders = this.openOrders.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.getUserDetails();
    }

    openHome() {
        this.props.history.push('/' +localStorage.getItem("sessionId") + '/home');
    }

    openCart() {
        this.props.history.push('/' +localStorage.getItem("sessionId") + '/cart');
    }

    openOrders() {
        this.props.history.push('/' +localStorage.getItem("sessionId") + '/orders');
    }

    logout() {
        UserService.logout();
        this.props.history.push('/');
    }

    getUserDetails() {
        UserService.getUserDetails()
        .then(
                response => {
                    console.log(response.data);
                    this.setState({user: response.data});
                }
        );
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th> <h1 className="font-face-gm">StarWars e-Merchandise: <br/>Early bird </h1><h4 style={{color:"green"}}>Hi, {this.state.user.userName}!</h4></th>
                            {/* <th className="row justify-content-right">
                                <td>
                                    <button className="btn btn-success" value = "search" onClick = {this.openHome} > Home </button>
                                </td>
                                <td>
                                    <button className="btn btn-success" value = "search" onClick = {this.openCart} > My Cart </button>
                                </td>
                                <td>
                                    <button className="btn btn-success" value = "search" onClick = {this.openOrders} > Orders </button>
                                </td>
                                <td>
                                    <button className="btn btn-success" value = "search" onClick = {this.logout} > Logout </button>
                                </td>
                            </th> */}
                            <th class="text-right ">
                                <button style={{margin: 10}} className="btn btn-success" value="search" onClick={this.openHome} > Home </button>
                                <button style={{margin: 10}} className="btn btn-success" value="search" onClick={this.openCart} > My Cart </button>
                                <button style={{margin: 10}} className="btn btn-success" value="search" onClick={this.openOrders} > Orders </button>
                                <button style={{margin: 10}} className="btn btn-success" value="search" onClick={this.logout} > Logout </button>
                            </th>
                        {/* </tr>
                            <h1>Hi, {this.state.user.userName}!</h1>
                        <tr> */}

                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default UserNavComponent;