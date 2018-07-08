import React, { Component } from 'react';
import {Panel,ListGroup,ListGroupItem} from 'react-bootstrap';


class EFDA extends Component {
    constructor(props) {
        super()

        this.state = {
            efda: props.efda
        }
    }

    render() {
        return (
            <div>
            <div>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h2"><b>Expected Results</b></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <br />
                        <ListGroup>
                            <ListGroupItem bsStyle="info">
                                <b>Total dependencies: {this.state.efda.direct_dependencies + this.state.efda.transitive_dependencies}</b> <br/>
                                &emsp; Direct dependencies: {this.state.efda.direct_dependencies} <br/>
                                &emsp; Transitive dependencies: {this.state.efda.transitive_dependencies}<br/>
                            </ListGroupItem>
                            <ListGroupItem bsStyle="danger">
                                Vulnerabilities: {this.state.efda.vulnerabilities}
                            </ListGroupItem>
                        </ListGroup>
                    <br />
                </Panel.Body>
            </Panel>
            </div>
            </div>
        );
    }
}

export default EFDA;
