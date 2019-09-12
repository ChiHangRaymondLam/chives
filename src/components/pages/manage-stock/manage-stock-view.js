import React, {Fragment} from 'react';
import SideBar from "../../shares/side-bar";

const ManageStockView = props => {

    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-3 col-lg-3 apl__side-bar-wrapper">
                <SideBar/>
            </div>
               <div className="col-xl-9 col-lg-9 col-md-12 p-0">
                    <div className="apl__header-section">
                        <h3>Manage Stock</h3>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ManageStockView;
