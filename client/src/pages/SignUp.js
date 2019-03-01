import React, { Component } from "react";
import fire from "../config/Fire";
import "../styles/Login.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (

            <div>
                <div className="row head">
                    <div className="col-sm-6">
                        <h1 className="appName">Rentilly</h1>
                    </div>

                    <div className="col-sm-6 to-login">
                        <div className="to-login-content">
                            <h5>
                                Already Have an Account?
                            </h5>
                            <Link to="/login" className="back-to-login">Back to Log In</Link>
                        </div>
                    </div>

                </div>


                <div className="form-div signup-div">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="form-head">Tell Us About Yourself</h2>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-sm-6">
                            <form className="signup-form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email Address</label>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control lines" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control lines" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" onClick={this.signup} className="btn signupbtn">Sign Up</button>
                            </form>
                        </div>


                        <div className="col-sm-6">
                            <img src="https://i.pinimg.com/originals/c4/c2/65/c4c26502099258f61ee9662ea4cf427b.jpg" className="pic"></img>
                        </div>
                    </div>

                </div>

                <div className="footer">
                    <img src="http://www.nutantravels.com/img/footer/footer.png" className="footer-img"></img>
                </div>

            </div>
        )
    }
}

export default SignUp;