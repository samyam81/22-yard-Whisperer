import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="">Mail us</a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://github.com/samyam81">22-yard whisperer</a>, made
              with love for a better web
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
