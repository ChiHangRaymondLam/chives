import React from 'react';
import SideBar from "../../shares/side-bar";
import HowDoseItWork from '../../../assets/images/HowDoesItWork.png'
import {FormattedMessage} from "react-intl";

const HomeView = props => {
    return (
        <div className="apl apl-home row">
            <div className="col-xl-3 col-lg-3 apl__side-bar-wrapper">
                <SideBar/>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 p-0">
                <div className="apl__header-section">
                    <h3><FormattedMessage id="home.search-title"/></h3>
                    <p>Select the criteria for the vehicles you wish to find. You can save the results of
                        this search on the results page</p>
                </div>
                <div className="row">
                    <div className="col-xl-9 col-lg-12 apl-home__search-form-wrapper">
                        <div className="apl-home__search-form-section">
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-0 apl-home__introduction-wrapper">
                        <div className="apl-home__explain-work-section">
                            <h4>How Does It Work?</h4>
                            <p>Click here to learn more about the buying process</p>
                            <img src={HowDoseItWork} alt="HowDoseItWork"/>
                        </div>
                        <div className="apl-home__browse-manufacturer-section">
                            <h4>Browse By Manufacturer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
