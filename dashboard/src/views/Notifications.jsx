import React from "react";

import {
  UncontrolledAlert,
  Card, CardHeader, CardBody, CardTitle,
  Row, Col
} from "reactstrap";

class Notifications extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Recent Notifications</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardBody>
                        <UncontrolledAlert color="info">
                          <span>
                            <b>Info - </b> This is a regular notification giving Info.
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="success">
                          <span>
                            <b>Success - </b> This is a regular notification denoting Success.
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning">
                          <span>
                            <b>Warning - </b> This is a regular notification denoting Warning.
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger">
                          <span>
                            <b>Danger - </b> This is a regular notification denoting Danger.
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                    <p>This page can be modified for content like receiving/sending notifications.</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notifications;
