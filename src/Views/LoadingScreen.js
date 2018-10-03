import React, {Component, Fragment} from "react";
import "./css/nefish.css";

class LoadScreen extends Component {
    render() {
        return (
            <Fragment>
                <div className="box">
                    <div className="left">
                        <div className="belly"/>
                    </div>
                    <div className="middle">
                        <div className="belly"/>
                    </div>
                    <div className="tail"/>

                    <div className="fin1"/>
                    <div className="fin2"/>
                    <div className="eye"/>
                    <div className="bubble1"/>
                    <div className="bubble2"/>
                    <div className="bubble3"/>
                    <div className="bubble4"/>
                    Search for pools
                </div>

            </Fragment>
        );
    }
}


export default (LoadScreen);