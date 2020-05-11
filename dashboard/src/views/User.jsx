import React from "react";

import {
  Button,
  Card, CardHeader, CardBody, CardTitle, 
  FormGroup, Form, Input,
  Row, Col
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>

          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("../assets/img/grey.jpg")}/>
              </div>
              <CardBody>
                <div className="author">
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img alt="..." className="avatar border-gray" src={require("../assets/img/default-avatar.png")} />
                    <h5 className="title">Sagar Udasi</h5>
                  </a>
                  <p className="description">@I-am-Sagar</p>
                </div>
                <p className="description text-center">
                  "I am still learning React. <br />
                  This is my first major project. Simple!"
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
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
                        <Button className="btn-round">Change Profile Picture</Button>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button className="btn-round" color="primary" type="submit">
                        Update Profile
                      </Button>
                    </div>
                  </Row>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
