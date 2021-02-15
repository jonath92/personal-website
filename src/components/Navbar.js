import React, { useRef } from 'react'
import { HashLink } from 'react-router-hash-link';

import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';


export default function Navbar() {

    const toggleRef = useRef()

    // This is to close the Hamburger Menu when clicking on an item. Not optimal but working ... 
    function handleItemClick() {
        // 768 px is width of md for bootstrap. https://getbootstrap.com/docs/4.0/layout/grid/ 
        // When making it above the behavior of the navigation bar is odd. Definetly needs to be improved
        if (document.body.clientWidth < 768) {
            toggleRef.current.click()

        }
    }

    function renderNavLink(path, name) {
        return (
            <Nav.Link
                as={HashLink}
                to={path}
                onClick={() => { handleItemClick() }}
            >
                {name}
            </Nav.Link>
        )
    }

    function renderDropDownItem(path, name) {
        return (
            <NavDropdown.Item
                as={HashLink}
                to={path}
                onClick={() => { handleItemClick() }}
                active={false}
            >
                {name}
            </NavDropdown.Item>
        )
    }


    return (

        <BootstrapNavbar fixed="top" bg="light" variant="light" expand="md" >
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" ref={toggleRef} />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {renderNavLink("/#landing", "Home")}
                    {/* {renderNavLink("/about", "About me")} */}


                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        {renderDropDownItem("/#projects", "Overview")}
                        <NavDropdown.Divider />

                        {/* <NavDropdown.Item
                            onClick={() => { handleItemClick() }}
                            href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>

            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>

    )
}
