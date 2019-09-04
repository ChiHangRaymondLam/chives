import React, {Component, Fragment} from 'react';
import HeaderView from "./headerView";
import "./header.scss"

class Header extends Component {

    render() {
        return (
            <Fragment>
                    <HeaderView/>
            </Fragment>
        );
    }
}

export default Header;
