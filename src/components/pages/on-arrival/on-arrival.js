import React, {Fragment} from 'react';
import iconSet from '../../../static/selection.json';
import IcomoonReact from 'icomoon-react';

const OnArrival = props => {
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
                    <div className="step-container">
                        <div className="step-diagram" style={{borderColor: "#aee2d9", backgroundColor: "#d1fa00"}}>
                            <div style={{marginTop: "70px"}} className="step-diagram-content">Transportation</div>
                            {/*topics.push(<option value="general_information">General Information</option>);*/}
                            {/*topics.push(<option value="hotel">Hotel</option>);*/}
                        </div>
                        <IcomoonReact className="icon-moon" iconSet={iconSet} size={80} color="#8cb1ed"
                                      icon="arrow-right"/>
                        <div className="step-diagram" style={{borderColor: "#aee2d9", backgroundColor: "#d1fa00"}}>
                            <div style={{marginTop: "50px"}} className="step-diagram-content">
                                General Information
                            </div>
                        </div>
                        <IcomoonReact className="icon-moon" iconSet={iconSet} size={80} color="#8cb1ed"
                                      icon="arrow-right"/>
                        <div className="step-diagram" style={{borderColor: "#aee2d9", backgroundColor: "#d1fa00"}}>
                            <div style={{marginTop: "70px"}} className="step-diagram-content">
                                Hotel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default OnArrival;
