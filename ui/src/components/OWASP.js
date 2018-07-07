import React, { Component } from 'react';

import owaspJSON from '../data/owasp.json';
import {Panel,ListGroup,ListGroupItem,Table } from 'react-bootstrap';


class OWASP extends Component {
    render() {
        return (
            <div>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h2"><b>OWASP Reports</b></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <br />
                    <ListGroup>
                        <ListGroupItem bsStyle="info">Total number of dependencies: {owaspJSON.libraries.length}</ListGroupItem>
                        <ListGroupItem bsStyle="danger">Total number of vulnerabilities: {owaspJSON.vulnerabilities.length}</ListGroupItem>
                    </ListGroup>
                    <br/>

                    {/*show dependencies */}
                    <h3>Dependencies</h3>
                    {owaspJSON.libraries.map((libraries)=>{
                        return (
                            <ListGroup key={libraries}>
                                <ListGroupItem>{libraries+""}</ListGroupItem>
                            </ListGroup>
                        )
                    })}
                    <br/>

                    {/*show vulnerabilities */}
                    <h3> Vulnerabilities </h3>
                    {owaspJSON.vulnerabilities.map((vulnerabilities)=>{
                        if (vulnerabilities[0]==null) {
                            return (
                                <Table striped bordered condensed hover key={vulnerabilities}>
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr><td>No CVE</td></tr>
                                        <tr><td>{vulnerabilities[1]}</td></tr>
                                    </tbody>
                                </Table>
                            )
                        }
                        return (
                            <Table striped bordered condensed hover key={vulnerabilities}>
                                <thead>
                                </thead>
                                <tbody>
                                    <tr><td>{vulnerabilities[0]}</td></tr>
                                    <tr><td>{vulnerabilities[1]}</td></tr>
                                </tbody>
                            </Table>
                        )
                    })}
                </Panel.Body>
            </Panel>
            </div>
        );
    }
}

export default OWASP;
