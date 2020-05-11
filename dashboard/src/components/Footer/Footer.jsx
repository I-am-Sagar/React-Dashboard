import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <p className="ml-auto">
            &copy; {1900 + new Date().getYear()}, Project42 Labs.
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
