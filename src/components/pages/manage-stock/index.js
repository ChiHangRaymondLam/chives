import React, {Component, Fragment} from 'react';
import ManageStockView from "./manage-stock-view";
import "./manage-stock.scss"

class ManageStock extends Component {

    render() {
        return (
            <Fragment>
                <ManageStockView/>
            </Fragment>
        );
    }
}

export default ManageStock;
