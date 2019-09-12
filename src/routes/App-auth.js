import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './App';
import Loading from "../components/shares/loading";
import {Redirect} from "react-router";

class AppAuth extends Component {
    render() {
        if (this.props.isLogin === null) {
            return <Loading/>
        }
        return (
            this.props.isLogin ? <App/> : <Redirect to="/login"/>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
});
export default connect(mapStateToProps, null)(AppAuth)
