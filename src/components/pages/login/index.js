import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleLogin} from "../../../routes/store/actions";
import App from "../../../routes/App";
import "./login.scss"
import Logo from "../../../assets/images/masseyUniversityLogo.png";

class Login extends Component {
    render() {
        return (
            this.props.isLogin ? <App/> :
                <div className="chi-login">
                    <div className="login-section">
                        <h3>Login</h3>
                        <div className={"logo"}>
                            <img className={"logo"} src={Logo} alt={"logo"}/>
                        </div>
                        <div className={"input-group"}>
                            <span>Username</span>
                            <input/>
                        </div>
                        <div className={"input-group"}>
                            <span>Password</span>
                            <input type={"password"}/>
                        </div>
                        <button className="btn-login"
                                onClick={() => {
                                    this.props.handleLogin(true);
                                    this.props.history.push('/')
                                }}>
                            Login
                        </button>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
});

const mapDispatchToProps = dispatch => ({
    handleLogin(value) {
        dispatch(handleLogin(value));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
