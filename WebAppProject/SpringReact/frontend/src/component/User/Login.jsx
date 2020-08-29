import React, { Component } from 'react';
import UserService from '../../service/UserService';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ""
        }
        this.uNameChange = this.uNameChange.bind(this);
        this.pwordChange = this.pwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    uNameChange(event) {
        this.setState({username: event.target.value});
    }

    pwordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if ((this.state.username == "") || this.state.password == "") {
            this.setState({message: "Fields can not be empty."});
        } else {
            UserService.login(this.state)
                .then(
                response => {
                    console.log(response.data);
                    if (response.data == "not found") {
                        console.log("user not found");
                        this.setState({message: "Username or Password is incorrect."}); 
                    } else {
                        localStorage.setItem("sessionId", response.data);
                        this.props.history.push('/' + localStorage.getItem("sessionId") + "/home");
                    }
                }
                );
        }
        
    }

    render() {
        return (
            <div className="container">
                  <h2>Log In</h2>
                  <a><font color="red">{this.state.message}</font></a>
                  <form  onSubmit = {this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Search" onChange = {this.uNameChange}/>
                    <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search" onChange = {this.pwordChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type = "submit" > Log In </button>
                  </form>
            </div>
        )

    }
}

export default Login;