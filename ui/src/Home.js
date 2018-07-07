import React from "react";
import { Link } from "react-router-dom";
import {Row,Col,Button} from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import './App.css';


class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            options: []
        }
    }

    onChange(e) {
        const options = this.state.options
        let index

        if (e.target.checked) {
            options.push(e.target.value)
        } else {
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
        }

        this.setState({ options: options })
        console.log(this.state.options)
    }

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
                                <label><input type="checkbox" value="efda/java/maven/exclusion-support" onChange={this.onChange.bind(this)}/>exclusion-support</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/maven/interpolated-variables" onChange={this.onChange.bind(this)}/>interpolated-variables</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/maven/project-aggregation" onChange={this.onChange.bind(this)}/>project-aggregation</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/maven/project-inheritance" onChange={this.onChange.bind(this)}/>project-inheritance</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/maven/scopes" onChange={this.onChange.bind(this)}/>scopes</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/maven/version-range" onChange={this.onChange.bind(this)}/>version-range</label>
                            </div>
                        </Collapsible >
                    </div>
                    <div> {/* Java - Ant Projects */ }
                        <Collapsible trigger="Ant " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/ant/with-ivy" onChange={this.onChange.bind(this)}/>with-ivy</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/ant/without-ivy" onChange={this.onChange.bind(this)}/>without-ivy</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div> {/* Java - Gradle Projects */ }
                        <Collapsible trigger="Gradle " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/gradle/gradle-scopes" onChange={this.onChange.bind(this)}/>gradle-scopes</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/gradle/multi-modules" onChange={this.onChange.bind(this)}/>multi-modules</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div> {/* Java - Jars Projects */ }
                        <Collapsible trigger="Jars" className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/jars/fat-jars" onChange={this.onChange.bind(this)}/>far-jars</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/jars/original-jars" onChange={this.onChange.bind(this)}/>original-jars</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/java/jars/recompiled-jars" onChange={this.onChange.bind(this)}/>recompiled-jars</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 2) Python </h5>
                    <div> {/* Python - Pip Projects */ }
                        <Collapsible trigger="Pip " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/python/pip/with-requirements-file" onChange={this.onChange.bind(this)}/>with-requirements-file</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/python/pip/with-setup-dot-py" onChange={this.onChange.bind(this)}/>with-setup-dot-py</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div> {/* Python - Pipenv Projects */ }
                        <Collapsible trigger="Pipenv " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/python/pipenv/with-pipfile-dot-lock" onChange={this.onChange.bind(this)}/>with-pipfile-dot-lock</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 3) Javascript </h5>
                    <div> {/* Javascript - NPM Projects */ }
                        <Collapsible trigger="NPM " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/npm/npm-package-lock" onChange={this.onChange.bind(this)}/>npm-package-lock</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/npm/npm-shrinkwrap" onChange={this.onChange.bind(this)}/>npm-shrinkwrap</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/npm/npm-version-ranges" onChange={this.onChange.bind(this)}/>npm-version-ranges</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/npm/npm-with-dev-dependencies" onChange={this.onChange.bind(this)}/>npm-with-dev-dependencies</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Javascript - Bower Projects */ }
                        <Collapsible trigger="Bower " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/bower/bower-version-ranges" onChange={this.onChange.bind(this)}/>bower-version-ranges</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Javascript - Yarn Projects */ }
                        <Collapsible trigger="Yarn " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/yarn/yarn-lock-with-dev-dependencies" onChange={this.onChange.bind(this)}/>yarn-lock-with-dev-dependencies</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/javascript/yarn/yarn-scopes" onChange={this.onChange.bind(this)}/>yarn-scopes</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 4)  Ruby</h5>
                    <div>  {/* Ruby - Bundler Projects */ }
                        <Collapsible trigger="Bundler " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/ruby/bundler/version-ranges" onChange={this.onChange.bind(this)}/>version-ranges</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/ruby/bundler/with-Gemfile.lock" onChange={this.onChange.bind(this)}/>with-Gemfile.lock</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/ruby/bundler/with-dev-dependencies" onChange={this.onChange.bind(this)}/>with-dev-dependencies</label>
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
                                <label><input type="checkbox" value="efda/objective-c/cocoapods/only-podfile" onChange={this.onChange.bind(this)}/>only-podfile</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/objective-c/cocoapods/with-podfile.lock" onChange={this.onChange.bind(this)}/>with-podfile.lock</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 6) PHP </h5>
                    <div>  {/* PHP - Composer Projects */ }
                        <Collapsible trigger="Composer " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/php/composer/scopes" onChange={this.onChange.bind(this)}/>scopes</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/php/composer/with-composer.lock" onChange={this.onChange.bind(this)}/>with-composer.lock</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/php/composer/with-dev-dependencies" onChange={this.onChange.bind(this)}/>with-dev-dependencies</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 7) Golang </h5>
                    <div>  {/* Golang - Glide Projects */ }
                        <Collapsible trigger="Glide" className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/glide/only-glide.yaml" onChange={this.onChange.bind(this)}/>only-glide.yaml</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/glide/with-glide.lock" onChange={this.onChange.bind(this)}/>with-glde.lock</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Golang - Trash Projects */ }
                        <Collapsible trigger="Trash " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/trash/trash-basic" onChange={this.onChange.bind(this)}/>trash-basic</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Golang - Govendor Projects */ }
                        <Collapsible trigger="Govendor " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/govendor/govendor-basic" onChange={this.onChange.bind(this)}/>govendor-basic</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Golang - Godep Projects */ }
                        <Collapsible trigger="Godep " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/godep/godep-basic" onChange={this.onChange.bind(this)}/>godep-basic</label>
                            </div>
                        </Collapsible>
                    </div>
                    <div>  {/* Golang - No Package Manager Projects */ }
                        <Collapsible trigger="No Package Manager" className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/golang/no-package-manager/goget-basic" onChange={this.onChange.bind(this)}/>goget-basic</label>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
                <Col md={3} mdPush={3}>
                    <h5 class="title"> 8) Scala </h5>
                        <div>  {/* Scala - SBT Projects */ }
                        <Collapsible trigger="SBT " className="subtitle">
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/scala/sbt/multi-projects" onChange={this.onChange.bind(this)}/>multi-projects</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/scala/sbt/sbt-basic" onChange={this.onChange.bind(this)}/>sbt-basic</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="efda/scala/sbt/version-ranges" onChange={this.onChange.bind(this)}/>version-ranges</label>
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
