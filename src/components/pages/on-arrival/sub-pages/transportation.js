import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from "axios";
import {GET_RESOURCE} from "../../../../constant/url";

class Transportation extends Component {

    constructor(props) {
        super(props);
    }

    //load resources
    componentDidMount() {
        let currentSection = "on_arrival";
        let currentTopic = "transportation";
        console.log("did called");
        this.props.loadResources(currentSection, currentTopic);
    }

    fromAirportToCity() {
        let content = this.props.resources[0].content;
        return (
            content
        );
    }

    render() {
        return (
            <div>
                example content is:
                {this.fromAirportToCity()}
            </div>);
    }
}

const mapStateToProps = (state) => ({
    resources: state.subpages.resources,
});

const mapDispatchToProps = (dispatch) => ({

    loadResources(section, topic) {
        console.log(section+" "+topic);
        console.log(GET_RESOURCE+"?section="+section+"&topic="+topic);
        axios.get(GET_RESOURCE, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
            params: {
                'section': section,
                'topic':topic
            }
        }).then((res) => {
            //let originAxiosRes = res;
            //console.log('!!!!!!!!!!' + originAxiosRes.data[0].resourceId);
            let result = [];
            result = res.data;
            const getResources = {
                type: 'getResources',
                data: result
            };
            dispatch(getResources);
        }).catch((e) => {
            ////console.log('error' + e);
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Transportation);
