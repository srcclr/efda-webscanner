import React from "react";
import { Link } from "react-router-dom";
import {Row,Col,Button} from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import './App.css';



class Home extends React.Component {


render() {

  return (
    <div class="home">
      <div className="container">
        <h1 class="head">Project Scanning </h1>
        <br />
        <div class="step1">
          <h3 class="chooseProject"> Step 1: Choose Project </h3>
          <p> Choose projects from EFDA  </p>
          <hr></hr>
            <h4> <u>EFDA Projects </u></h4>{/*EFDA projects */}
            <Row>
              <Col md={3} mdPush={3}>
                <h5 class="title"> 1) Java </h5>
                  <div> {/*  Java - Maven Projects */ }
                    <Collapsible trigger="Maven" className="subtitle">
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/>Dependencies Exclusion</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Interpolated Variables</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Project Aggregation</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Project Inheritance</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Scopes</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Version Range</label>
                      </div>
                    </Collapsible >
                  </div>

                  <div> {/* Java - Ant Projects */ }
                    <Collapsible trigger="Ant " className="subtitle">
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> With Apachle Ivy</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Without Apachle Ivy</label>
                      </div>
                    </Collapsible>
                  </div>

                  <div> {/* Java - Gradle Projects */ }
                    <Collapsible trigger="Gradle " className="subtitle">
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Multi Modules</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Scopes</label>
                      </div>
                    </Collapsible>
                  </div>

                  <div> {/* Java - None Projects */ }
                    <Collapsible trigger="None " className="subtitle">
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Original Third-Party Jars</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Fat Jars</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" value=""/> Recompiled Jars Matching</label>
                      </div>
                    </Collapsible>
                  </div>
              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 2) Python </h5>
                <div> {/* Python - Pip Projects */ }
                  <Collapsible trigger="Pip " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With requirements.txt</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With setup.py</label>
                    </div>
                  </Collapsible>
                </div>
              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 3) Javascript </h5>
                <div> {/* Javascript - NPM Projects */ }
                  <Collapsible trigger="NPM " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With-package.json only</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Prod & Dev Dependencies</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With npm-shrinkwrap</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Version Ranges</label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Javascript - Bower Projects */ }
                  <Collapsible trigger="Bower " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Version Ranges</label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Javascript - Yarn Projects */ }
                  <Collapsible trigger="Yarn " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With yarn.lock</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Scopes</label>
                    </div>
                  </Collapsible>
                </div>
              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 4)  Ruby</h5>
                <div>  {/* Ruby - Bundler Projects */ }
                  <Collapsible trigger="Bundler " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Version Ranges</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Groups</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Only Gemfile.lock</label>
                    </div>
                  </Collapsible>
                </div>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={3} mdPush={3}>
              <h5 class="title"> 5) Objective-C </h5>
                <div>  {/* Objective-C - CoacoaPods Projects */ }
                  <Collapsible trigger="CoacoaPods " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Only Podfile</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With Podfile.lock </label>
                    </div>
                  </Collapsible>
                </div>
              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 6) PHP </h5>
                <div>  {/* PHP - Composer Projects */ }
                  <Collapsible trigger="Composer " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Only composer.json</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With composer.lock </label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With Scopes (--no-dev) </label>
                    </div>
                  </Collapsible>
                </div>
              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 7) Golang </h5>
                <div>  {/* Golang - Glide Projects */ }
                  <Collapsible trigger="CoacoaPods " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Only glide.yaml</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With glde.lock </label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Golang - Trash Projects */ }
                  <Collapsible trigger="Trash " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With vendor.conf</label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Golang - Govendor Projects */ }
                  <Collapsible trigger="Govendor " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With vendor.json</label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Golang - Godep Projects */ }
                  <Collapsible trigger="Godep " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With Godeps.json</label>
                    </div>
                  </Collapsible>
                </div>

                <div>  {/* Golang - None Projects */ }
                  <Collapsible trigger="None " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Using command "go get"</label>
                    </div>
                  </Collapsible>
                </div>

              </Col>

              <Col md={3} mdPush={3}>
              <h5 class="title"> 8) Scala </h5>
                <div>  {/* Scala - SBT Projects */ }
                  <Collapsible trigger="SBT " className="subtitle">
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> With build.sbt</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Version ranges</label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value=""/> Multi Modules</label>
                    </div>
                  </Collapsible>
                </div>

              </Col>
            </Row>
          </div>
          <br/>
        <div class="step2">
          <h3 class="startScan"> Step 2: Start Scanning! </h3>
          Scan your selected projects
          <hr></hr>
          <Link to="/report"><Button bsStyle="primary">Start scan</Button></Link> {/*Home page. Scanning direct to report page */ }
        </div>
      </div>
    </div>
  )
}
}

export default Home;
