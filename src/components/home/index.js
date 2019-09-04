import React, {Component, Fragment} from 'react';
import HomeView from "./homeView";
import "./home.scss"

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <HomeView/>
                </div>
            </Fragment>
        );
    }
}

export default Home;
