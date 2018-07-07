import React from "react";
import { Link } from "react-router-dom";
import SrcclrJson from "./components/Srcclr"
import OWASPJson from "./components/OWASP"
import ExpectedResultsJson from "./components/ExpectedResults"
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import {Row,Col,Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import './App.css';


class Report extends React.Component {
    constructor(props) {
        super()

        this.state = {
            options: props.location.state.options
        }

        console.log(this.state.options)
    }

    render() {
        return (
            <div>
            <div className="container">
            <h1 class="head">Report</h1>
            <br />
            <div class="row">
            <div class="col">
            <CollapsibleComponent>
                <CollapsibleHead className="additionalClassForHead">Report 1: Project - </CollapsibleHead> {/* Number of panel based on number of projects*/ }
                    <CollapsibleContent class="additionalClassForContent">

                    <ExpectedResultsJson />

                    <div class="row">
                        <div class="col">
                            <SrcclrJson />
                        </div>
                        <div class="col">
                            <OWASPJson />
                        </div>
                    </div>
                </CollapsibleContent>
            </CollapsibleComponent>
            </div>
            </div>
            <br />
            <p align="center">
                <Link to="/"><Button bsStyle="primary">Back to scan</Button></Link> {/*Report page. Back to home page */ }
            </p>
            </div>
            </div>
        )
    }
}

export default Report;
