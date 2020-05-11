import React, { Component } from 'react';
import {
  Button,
  Card, CardHeader, CardBody, CardTitle, 
  FormGroup, Form, Input,
  Row, Col
} from "reactstrap";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Navbars/Header";
import Footer from "../components/Footer/Footer";

import routes from "../routes";

class SignIn extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes}/>
        <div className="main-panel">
          <Header {...this.props} />
          <div className="content">
            <p>You need to <strong>Sign In</strong> or <strong>Sign Up</strong> to see the dashboard!</p>
            <Row>
              <Col md="4">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Log In to your account. <strong>Sign In</strong></CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col className="pr-1" md="11">
                          <FormGroup>
                            <label>Email ID</label>
                            <Input placeholder="Email ID" type="email" onSubmit={this.handleInput}/>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="pr-1" md="11">
                          <FormGroup>
                            <label>Password</label>
                            <Input placeholder="Password" type="password" onSubmit={this.handleInput}/>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button className="btn-round" color="primary" type="submit">
                            Sign In
                          </Button>
                        </div>
                      </Row>

                      <hr />

                      <p>Use 'test@test.com' as Email and 'test123' as Password for testing purpose. Or Sign Up.</p>

                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col md="8">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Create new account. <strong>Sign Up</strong></CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form>

                      <Row>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label>First Name</label>
                            <Input placeholder="First Name" type="text"/>
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label>Last Name</label>
                            <Input placeholder="Last Name" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="pr-1" md="5">
                          <FormGroup>
                            <label> Email address </label>
                            <Input placeholder="Email" type="email" />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="4">
                          <FormGroup>
                            <label> Password </label>
                            <Input placeholder="Password" type="number"/>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="11">
                          <FormGroup>
                            <label>Address</label>
                            <Input placeholder="Home Address" type="text"/>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="pr-1" md="4">
                          <FormGroup>
                            <label>City</label>
                            <Input placeholder="City" type="text" />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="4">
                          <FormGroup>
                            <label>Country</label>
                            <Input placeholder="Country" type="text"/>
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Phone Number</label>
                            <Input placeholder="+91 9876543210" type="number"/>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>About Me</label>
                            <Input type="textarea" />
                          </FormGroup>
                        </Col>
                      </Row>

                      
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Button className="btn-round">Add Profile Picture</Button>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button className="btn-round" color="primary" type="submit">
                            Sign Up
                          </Button>
                        </div>
                      </Row>

                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <hr/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignIn;