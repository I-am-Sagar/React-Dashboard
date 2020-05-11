import React from "react";

import {
  Card, CardBody,
  Row, Col, 
  Table
} from "reactstrap";

import CustomCard from "../components/Content/CustomCard";

let cards = [
  {
    order: 1,
    heading: "Pending Cases",
    count: 56,
    color: "#0095ff",
    icon: "fa fa-plus-square fa-4x"
  },
  {
    order: 2,
    heading: "Finished Cases",
    count: 235,
    color: "#008000",
    icon: "fa fa-medkit fa-4x"
  },
  { 
    order: 3,
    heading: "Urgent Cases",
    count: 9,
    color: "#FF0000",
    icon: "fa fa-heartbeat fa-4x"
  }
]

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>Overview</h3>
        <Row>
          {cards.map(card => {
            return (
              <Col lg="3" md="6" sm="6" key={card.order}>
                <CustomCard heading={card.heading} count={card.count} icon={card.icon} color={card.color}/>
              </Col>
            );
          })}
        </Row>

        <h3>Some Tabular Data</h3>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Client ID</th> 
                      <th>Patient's Name</th>
                      <th>Gender</th> 
                      <th>Status</th> 
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>35-738</td> 
                      <td>Ravishankar Prasad</td>
                      <td>Male</td> 
                      <td>Normal Case</td> 
                      <td>Orthopedics</td>
                    </tr>
                    <tr>
                      <td>23-789</td> 
                      <td>Sania Minerva</td>
                      <td>Female</td> 
                      <td>Departed</td> 
                      <td>Obstetrics</td>
                    </tr>
                    <tr>
                      <td>56-786</td> 
                      <td>Shaikh Muzamudin</td>
                      <td>Male</td> 
                      <td>Critical Case</td> 
                      <td>Cardiology</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
