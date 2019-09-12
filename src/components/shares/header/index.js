import React, {Component, Fragment} from 'react';
import HeaderView from "./header-view";
import {connect} from "react-redux";
import {handleLogin} from "../../../routes/store/actions";
import {setLocales} from "../../../locales/store/actions";
import {FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuShow: false
        }
    }

    render() {
        return <HeaderView
            isMobileMenuShow={this.state.isMobileMenuShow}
            handleMobileMenuShow={this.handleMobileMenuShow}
            getHeaderItems={this.getHeaderItems}
            handleLogin={this.props.handleLogin}
            setLocales={this.props.setLocales}
            lang={this.props.lang}/>;
    }

    handleMobileMenuShow = () => {
        let isMobileMenuShow = this.state.isMobileMenuShow;
        isMobileMenuShow = !isMobileMenuShow;
        this.setState({isMobileMenuShow});
    };

    getHeaderItems = itemId => {
        let isMobileMenuShow = this.state.isMobileMenuShow;
        if (!itemId) {
            return null;
        }
        if (isMobileMenuShow) {
            return (
                <div onClick={() => {
                    this.handleMobileMenuShow();
                }}>
                    <FormattedMessage id={itemId}/>
                </div>
            )
        } else {
            return (
                <Fragment>
                    <FormattedMessage id={itemId}/>&nbsp;
                    <FontAwesomeIcon icon={faCaretDown}/>
                </Fragment>)
        }
    }
}

const mapStateToProps = state => ({
    lang: state.locales.lang,
});

const mapDispatchToProps = dispatch => ({
    handleLogin(value) {
        dispatch(handleLogin(value));
    },
    setLocales(value) {
        dispatch(setLocales(value));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
