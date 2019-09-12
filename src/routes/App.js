import React, {Component, Fragment} from 'react';
import messages from "../locales/messages";
import {connect} from "react-redux";
import {IntlProvider} from "react-intl";
import {Redirect, Route, Switch} from "react-router";

import Home from "../components/pages/home";
import Header from "../components/shares/header";
import Account from "../components/pages/account";
import Help from "../components/pages/help-page";
import Trade from "../components/pages/trade";
import ManageStock from "../components/pages/manage-stock";
import Footer from "../components/shares/footer";

class App extends Component {
    render() {
        return (
            <IntlProvider locale={"en"} messages={messages[this.props.lang]}>
                <Fragment>
                    <Header/>
                    <div className='container'>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/trade' exact component={Trade}/>
                            <Route path='/manage-stock' exact component={ManageStock}/>
                            <Route path='/account' exact component={Account}/>
                            <Route path='/help' exact component={Help}/>
                            <Route render={() => <Redirect from="/*" to="/"/>}/>
                        </Switch>
                    </div>
                    <Footer/>
                </Fragment>
            </IntlProvider>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.locales.lang,
});

export default connect(mapStateToProps, null)(App);

