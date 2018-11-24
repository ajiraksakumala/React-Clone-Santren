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
              <NavbarBrand onClick={ ()=>this.props.link("Home") }><img className="logo" src="http://i63.tinypic.com/oid9xu.png"/></NavbarBrand>
              <NavbarBrand onClick={ ()=>this.props.link("Home") }>Santren Koding</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto text-center" navbar>
                  <NavItem>
                    <NavLink onClick={ ()=>this.props.link("Kajian") }>Kajian Koding</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={ ()=>this.props.link("Mondok") }>Mondok Koding</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={ ()=>this.props.link("Kitab") }>Kitab Koding</NavLink>
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
