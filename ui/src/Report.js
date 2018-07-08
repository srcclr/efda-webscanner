import React from "react";
import { Link } from "react-router-dom";
import SrcclrJson from "./components/Srcclr"
import OWASPJson from "./components/OWASP"
import EFDA from "./components/EFDA"
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import {Button} from 'react-bootstrap';
import './App.css';
import expectedResultsjson from './data/expectedresults.json';
import srcclrJson from './data/srcclr.json';


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
            <h1 className="head">Report</h1>
            <br />
            <div className="row">
            <div className="col">
            <CollapsibleComponent>
                { this.state.options.map((data) => {
                    return (
                        <React.Fragment key={data}>
                            <CollapsibleHead className="additionalClassForHead">Report 1: Project - </CollapsibleHead>
                                <CollapsibleContent className="additionalClassForContent">

                                <EFDA efda={expectedResultsjson}/>

                                <div className="row">
                                    <div className="col">
                                        <SrcclrJson json={srcclrJson}/>
                                    </div>
                                    <div className="col">
                                        <OWASPJson />
                                    </div>
                                </div>
                            </CollapsibleContent>
                        <br /><br />
                        </React.Fragment>
                    )
                })}
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
