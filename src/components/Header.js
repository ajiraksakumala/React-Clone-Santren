import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';
import '../assets/App.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <Navbar color="light" light expand="md" toggleable={`md`} fixed={'top'} >
              <NavbarBrand href="/"><img className="logo" src="http://i63.tinypic.com/oid9xu.png"/></NavbarBrand>
              <NavbarBrand href="/">Santren Koding</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto text-center" navbar>
                  <NavItem>
                    <NavLink href="#">Kajian Koding</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Mondok Koding</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Kitab Koding</NavLink>
                  </NavItem>
                  <NavItem>
                    <Button outline color="primary">Masuk/Daftar</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}
