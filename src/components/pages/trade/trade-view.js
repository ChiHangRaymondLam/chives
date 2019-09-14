import React, {Fragment} from 'react';

const TradeView = props => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-3 col-lg-3 chi__side-bar-wrapper">
                    <div className="chi-sidebar">
                        <div className="chi-sidebar__wrapper">
                            <div className="section">
                                <p className="title">Guidance</p>
                                <div className="content">
                                    <p>Step 1</p>
                                    <p>Step 2</p>
                                    <p>Step 3</p>
                                    <p>Step 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 p-0">
                    <div className="chi__header-section">
                        <h3>On Arrival</h3>
                    </div>
                    <div className="main-content">
                        <p>Content</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TradeView;
