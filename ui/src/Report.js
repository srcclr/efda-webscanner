import React from "react";
import { Link } from "react-router-dom";
import SrcclrJson from "./components/Srcclr"
import OWASPJson from "./components/OWASP"
import EFDA from "./components/EFDA"
import Collapsible from 'react-collapsible';
import {Button} from 'react-bootstrap';
import axios from 'axios';


class Report extends React.Component {
    constructor(props) {
        super()

        this.state = {
            options: props.location.state.options,
            results: []
        }
    }

    componentDidMount() {
        var self = this;

        function getEFDA(project) {
            const params = new URLSearchParams();
            params.append("target", project);
            return axios.post('http://127.0.0.1:5000/scan/efda', params);
        }

        function getSrcclr(project) {
            const params = new URLSearchParams();
            params.append("target", project);
            return axios.post('http://127.0.0.1:5000/scan/srcclr', params);
        }

        function getOWASP(project) {
            const params = new URLSearchParams();
            params.append("target", project);
            return axios.post('http://127.0.0.1:5000/scan/owasp', params);
        }

        (async function loop() {
            for (const project of self.state.options) {
                await axios.all([getEFDA(project), getSrcclr(project), getOWASP(project)])
                    .then(axios.spread(function (efda, srcclr, owasp) {
                        efda = efda.data
                        srcclr = srcclr.data
                        owasp = owasp.data
                        self.state.results.push([efda, srcclr, owasp, project])
                        console.log(self.state.results);
                        self.forceUpdate()
                    }))
                    .catch(function (error) {
                        self.state.results.push([project])
                        self.forceUpdate()
                    });
            }
        })();
    }

    render() {
        return (
            <div>
            <div className="container">
            <h1 className="head">Report</h1>
            <br />
            <div className="row">
            <div className="col">
                { this.state.results.map((data) => {
                    if (data.length === 1) {
                        return (
                            <Collapsible trigger={data[0] + " - Error with scanning EFDA sub-project."} triggerDisabled={true}>
                            </Collapsible>
                        )
                    } else {
                        return (
                            <React.Fragment key={data}>
                                <Collapsible trigger={data[3]}>

                                    <EFDA efda={data[0]}/>

                                    <div className="row">
                                        <div className="col">
                                            <SrcclrJson json={data[1]}/>
                                        </div>
                                        <div className="col">
                                            <OWASPJson json={data[2]}/>
                                        </div>
                                    </div>
                                </Collapsible>
                            <br />
                            </React.Fragment>
                        )
                    }
                })}
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
