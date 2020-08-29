import React, { Component } from 'react';
import UserService from '../../service/UserService';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            userId: "",
            userName: "",
            email: "",
            mobNum: "",
            password: ""
        }
        this.uNameChange = this.uNameChange.bind(this);
        this.pwordChange = this.pwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numChange = this.numChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    componentDidMount() {
    }

    uNameChange(event) {
        this.setState({userName: event.target.value});
    }

    pwordChange(event) {
        this.setState({password: event.target.value});
    }

    emailChange(event) {
        this.setState({email: event.target.value});
    }

    numChange(event) {
        this.setState({mobNum: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if ((this.state.userName == "") || this.state.email == "" || this.state.mobNum == "" || this.state.password == "") {
            this.setState({message: "Fields can not be empty."});
        } else if(this.state.password.length < 8){
            this.setState({message: "Password must have at least 8 symbols."});
        } else {
            UserService.signup(this.state)
            .then(response => {
                console.log(response);
                if(response.status == "201") {
                    this.props.history.push('/login');
                }else {
                    this.setState({message: "Username is taken."});
                }
            });
            
        }
    }

    render() {
        return (
            <div className="container">
                  <h2>Sign Up</h2>
                  <a><font color="red">{this.state.message}</font></a>
                  <form  onSubmit = {this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Search" onChange = {this.uNameChange}/>
                    <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Search" onChange = {this.emailChange}/>
                    <input className="form-control mr-sm-2" type="tel" placeholder="Phone Number" aria-label="Search" onChange = {this.numChange}/>
                    <input className="form-control mr-sm-2" type="password" name="password" placeholder="Password" aria-label="Search" onChange = {this.pwordChange}/>                
                    <button className="btn btn-outline-success my-2 my-sm-0" type = "submit" > Sign Up </button>
                  </form>
            </div>
        )
    }
}

export default SignUp;