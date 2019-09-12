import React from 'react';

const SideBarView = props => {
    return (
        <div className="apl-sidebar">
            <div className="apl-sidebar__wrapper">
                <div className="section">
                    <p className="title">Account</p>
                    <div className="content">
                        <p style={{fontWeight: 'bold'}}>Search</p>
                        <p>My WatchList</p>
                        <p>My Current Questions</p>
                        <p>My Answered Questions</p>
                        <p>My Current Offers</p>
                        <p>My Completed Offers</p>
                    </div>
                </div>
                <div className="section">
                    <p className="title">Searches</p>
                    <div className="content">
                        <p>Japan</p>
                        <p>New Zealand</p>
                        <p>UK</p>
                    </div>
                </div>
                <div className="section">
                    <p className="title">Searches</p>
                    <div className="content">
                        <p>Japan</p>
                        <p>New Zealand</p>
                        <p>UK</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBarView;
