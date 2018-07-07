import React, { Component } from 'react';
import {Panel,ListGroup,ListGroupItem,Table } from 'react-bootstrap';
import expectedResultsjson from '../data/expectedresults.json';

var total_dependencies = expectedResultsjson.direct_dependencies + expectedResultsjson.transitive_dependencies;

class ExpectedResults extends Component {
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
          <b>Total dependencies: {total_dependencies}</b> <br/>
          &emsp; Direct dependencies: {expectedResultsjson.direct_dependencies} <br/>
          &emsp; Transitive dependencies: {expectedResultsjson.transitive_dependencies}<br/>
          </ListGroupItem>
          <ListGroupItem bsStyle="danger">  Vulnerabilities: {expectedResultsjson.vulnerabilities}</ListGroupItem>
        </ListGroup>
    <br />
    </Panel.Body>
  </Panel>


        </div>
        </div>
      );
  }
}

export default ExpectedResults;
