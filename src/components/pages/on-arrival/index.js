import React, {Component, Fragment} from 'react';
import "./on-arrival.css"
import {Link} from "react-router-dom";
import iconSet from '../../../static/selection.json';
import IcomoonReact from 'icomoon-react';

class Arrival extends Component {

    redirectToTransport() {
        this.props.history.push("/on-arrival/transportation");
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 chi__side-bar-wrapper">
                        <div className="chi-sidebar">
                            <div className="chi-sidebar__wrapper">
                                <div className="section">
                                    <p className="title">Guidance</p>
                                    <div className="content">
                                        <Link to={'/on-arrival/transportation'} style={{color: "#5a5a51"}}>
                                            <div><p>Transportation</p></div>
                                        </Link>
                                        <div><p>General Information</p></div>
                                        <div><p>Hotel</p></div>
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
                                <div style={{marginTop: "70px"}} className="step-diagram-content" onClick={this.redirectToTransport.bind(this)}>Transportation</div>
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
    }
}

export default Arrival;
