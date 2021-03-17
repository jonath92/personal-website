// external dependencies
import { useEffect, useState } from 'react'
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components/macro'
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

// own features
import { links, Link } from 'types'

// styles
const BootstrapNavbarStyled = styled(BootstrapNavbar).attrs(({
    fixed: 'top',
    bg: 'light',
    variant: 'light',
    expand: 'md',
}))``


const Navbar = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        // ensures it is scrolling to top when no hash given in url. 
        if (!location.hash) {
            window.scrollTo(0, 0)
        }
    }, [location])

    // by default the Menu stays open after click on Mobile 
    function collapseMenu() {
        setTimeout(() => {
            setExpanded(false)
        }, 150)
    }

    type LinkType = 'dropdown' | 'toplevel'

    function renderLink(linktype: LinkType, link: Link, name: String) {
        const path = link.hash ? `${link.location}#${link.hash}` : link.location

        const linkProps = {
            as: HashLink,
            to: path,
            onClick: () => collapseMenu()
        }

        // TODO: make dynamic Tagname
        if (linktype === 'dropdown') {
            return (
                <NavDropdown.Item {...linkProps}>
                    {name}
                </NavDropdown.Item>
            )
        } else {
            return (
                <Nav.Link  {...linkProps}>
                    {name}
                </Nav.Link>
            )
        }
    }


    function renderHamburgerIcon() {
        return (
            <BootstrapNavbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(expanded ? false : true)}
            />
        )
    }

    function renderProjectDropDown() {
        return (
            <>
                <NavDropdown title="Projects" id="project-nav-dropdown" >
                    {renderLink('dropdown', links.overview, 'Overview')}
                    <NavDropdown.Divider />
                    {renderLink('dropdown', links.joplin, 'Joplin')}
                    {renderLink('dropdown', links.radio, 'Linux Mint Radio Applet')}
                    {renderLink('dropdown', links.kanban, 'Kanban Board')}
                    {renderLink('dropdown', links.zugabe, 'Zugabe')}

                </NavDropdown>
            </>

        )
    }

    // Dropdown on small - menubar on large window size
    function renderMenu() {
        return (
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {renderLink('toplevel', links.home, 'Home')}
                    {renderProjectDropDown()}
                </Nav>

            </BootstrapNavbar.Collapse>
        )
    }


    return (
        <BootstrapNavbarStyled expanded={expanded}>
            {renderHamburgerIcon()}
            {renderMenu()}
        </BootstrapNavbarStyled>
    )
}

export { Navbar }