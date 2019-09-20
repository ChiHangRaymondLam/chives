import React, {Component} from "react";
import {withRouter} from "react-router";
import axios from "axios";
import {connect} from 'react-redux';
import {ADD_RESOURCE} from "../constant/url";

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resourceName: null,
            section: 'on_arrival',
            topic: null,
            type: 'image',
            content: null
        }
    }

    handleSectionChange(item) {
        //console.log('set type to ' + item);
        this.setState({section: item});
    }

    handleTypeChange(item) {
        //console.log('set type to ' + item);
        this.setState({type: item});
    }

    handleTopicChange(item) {
        //console.log('set type to ' + item);
        this.setState({topic: item});
    }

    handleContentChange(item) {
        //console.log('set type to ' + item);
        this.setState({content: item});
    }

    handleResourceNameChange(item) {
        //console.log('set type to ' + item);
        this.setState({resourceName: item});
    }

    getTopics() {
        let topics = [];
        let sectionName = this.state.section;
        if(sectionName==="on_arrival") {
            this.state.topic = "transportation";
            topics.push(<option value="transportation">Transportation</option>);
            topics.push(<option value="general_information">General Information</option>);
            topics.push(<option value="hotel">Hotel</option>);
        }
        else if(sectionName==="prepare_new_life") {
            this.state.topic = "finance";
            topics.push(<option value="finance">Finance</option>);
            topics.push(<option value="transport">Transport</option>);
            topics.push(<option value="shopping">Shopping</option>);
            topics.push(<option value="accommodation">Accommodation</option>);
        }else if(sectionName==="on_campus") {
            this.state.topic = "massey_website";
            topics.push(<option value="massey_website">Massey Website</option>);
            topics.push(<option value="school_facilities">School Facilities</option>);
        }else if(sectionName==="academic") {
            this.state.topic = "academic_advice";
            topics.push(<option value="academic_advice">Academic Advice</option>);
            topics.push(<option value="lab">Lab</option>);
        }
        return topics
    }

    addNewResource() {
        let postObj = {};
        postObj['resourceId'] = this.state.section + ":" + this.state.topic + ":"
            + this.state.type + ":" + this.state.resourceName;
        postObj['section'] = this.state.section;
        postObj['topic'] = this.state.topic;
        postObj['type'] = this.state.type;
        postObj['content'] = this.state.content;

        axios.post(ADD_RESOURCE, postObj, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //console.log('return res' + res);
            alert("Successfully add resource with id!"+this.state.resourceName);
        }).catch((e) => {
            //console.log(e);
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" style={{marginTop: "50px;"}}>
                        <div className="col-md-10 col-md-offset-1" id='popular'>
                            <h3 htmlFor="story" style={{marginTop: "20px"}} className="col-md-8 col-md-offset-1">Add
                                content:</h3>
                            <textarea className="col-md-10 col-md-offset-1" id="story" name="story"
                                      style={{height: "600px"}} onChange={(e) =>
                                this.handleContentChange(e.target.value)}>
                            </textarea>
                            <br/>
                            <label>Select Section </label>
                            <select onChange={(e) =>
                                this.handleSectionChange(e.target.value)}>
                                <option value="on_arrival">On Arrival</option>
                                <option value="prepare_new_life">Prepare New Life</option>
                                <option value="on_campus">On Campus</option>
                                <option value="academic">Academic</option>
                            </select>
                            <div>
                                <label>Select Topic</label>
                                <select onChange={(e) =>
                                    this.handleTopicChange(e.target.value)}>
                                    {this.getTopics()}
                                </select>
                            </div>
                            <div>
                                <label>Select Resource Type</label>
                                <select onChange={(e) =>
                                    this.handleTypeChange(e.target.value)}>
                                    <option value="image">Image</option>
                                    <option value="paragraph">Paragraph</option>
                                    <option value="sub_title">Sub Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        Resource Name: <input style={{width: "190px", margin: "20px"}} onChange={(e) =>
                        this.handleResourceNameChange(e.target.value)}/>
                    </div>

                    <div className="col-md-4 col-md-offset-4">
                        <input style={{width: "90px", margin: "20px"}} type="submit" className="btn btn-primary"
                               value="Submit" onClick={this.addNewResource.bind(this)}/>
                    </div>

                </div>
            </div>
        );
    }
}








export default withRouter(Editor);
