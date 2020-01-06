import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Container } from 'reactstrap';

class AppNavBar extends Component{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand>Fantasy Fighter</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;