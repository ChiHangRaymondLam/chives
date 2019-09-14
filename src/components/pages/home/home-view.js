import React from 'react';
import {FormattedMessage} from "react-intl";
import StepImg from "../../../assets/images/step_img.jpg"

const HomeView = props => {
    return (
        <div className="chi chi-home row">
            <div className="col-12 p-0">
                <div className="chi__header-section">
                    <h3><FormattedMessage id="home.search-title"/></h3>
                </div>
                <div className="step-img">
                    <img src={StepImg} alt="step"/>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
