import React from "react";
import { Redirect } from "react-router";
import API from "../../utils/API";


class Auth extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" });

        switch (this.props.location.pathname) {
            case "/login": {
                API.login(this.state)
                    .then(res => {
                        console.log(res.data);
                        localStorage.setItem("userID", res.data.userID);
                        this.props.handleLogIn(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                break;
            }
            case "/signup": {
                API.signup(this.state)
                    .then(res => {
                        console.log(res.data);
                        this.props.handleSignUp(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                break;
            }
        }
    };

    render() {
        const signUp = this.props.location.pathname === "/signup";
        if (this.props.isLoggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className=" column is-half is-offset-one-quarter">
                <h2 className="auth is-size-3">{signUp ? "Sign Up" : "Log In"}</h2>

                <br />
                <br />
                <div className="field is-grouped-centered">
                    <label className="label">Username:</label>
                    <div className="control is-expanded">
                        <input
                            className="input is-link"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <label className="label">Password:</label>
                    <div className="control is-expanded">
                        <input
                            className="input is-link"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <div className="control">
                        <a
                            className="button is-link"
                            type="submit"
                            onClick={this.handleFormSubmit}
                        >
                            Submit
            </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;