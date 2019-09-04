import React, {Component, Fragment} from 'react';
import Home from "./components/home";
import Header from "./components/header";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Home/>
            </Fragment>
        );
    }
}

export default App;
