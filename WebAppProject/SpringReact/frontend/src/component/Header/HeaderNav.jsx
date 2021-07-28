import React, { Component } from 'react';
import '../../index.css';

class HeaderNavComponent extends Component {
    constructor(props) {
        super(props)
        this.openHome = this.openHome.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    openHome() {
        this.props.history.push('/');
    }

    login() {
        this.props.history.push('/login');
    }

    signup() {
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th> <h1 className="font-face-gm">StarWars e-Merchandise: <br/>Early bird</h1> </th>
                            <th> <button className="btn btn-success" value = "search" onClick = {this.openHome} > Home </button> </th>
                            <th> <button className="btn btn-success" value = "search" onClick = {this.login} > Log In </button> </th>
                            <th> <button className="btn btn-success" value = "search" onClick = {this.signup} > Sign Up </button> </th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default HeaderNavComponent;