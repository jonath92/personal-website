import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
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


    return (

        <BootstrapNavbar fixed="top" bg="light" variant="light" expand="md" >
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" ref={toggleRef} />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/"
                        onClick={() => { handleItemClick() }}>
                        Home
                </Nav.Link>


                    <Nav.Link as={Link} to="/about" onClick={() => { handleItemClick() }} >Link</Nav.Link>

                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#projects" data-toggle="collapse" data-target=".navbar-collapse.show">Overview</NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { handleItemClick() }} href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>

        // <ul>
        //     <Link to='./home' >Home</Link>
        //     <Link to='./about' >About</Link>
        // </ul>

    )
}
