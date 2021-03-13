// external dependencies
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

// styles
const OuterContainer = styled.section`
    height         : 150px;
    background     : #e9eced;
    display        : flex;
    flex-direction : column;
    flex-shrink: 0;
    align-items    : center;
    justify-content: space-evenly;
    width: 100%;

    @media only screen and (min-width: 768px) {
        height         : 120px;
    }
`
const TopContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    width: 100px
`

interface mdOnly {
    mdOnly?: boolean
}

const P = styled.p`
    margin: 0;
    display: ${(p: mdOnly) => p.mdOnly ? 'none' : 'initial'};
    @media only screen and (min-width: 768px) {
        display  :  initial;
    }
`
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction  : row;
        right    : 52vw;
    }
`
const StyledLink = styled(Link)`
    color: black
`

const Footer = () => {

    function renderIcon(href: string, icon: any,) {
        return (
            <a href={href}>
                <FontAwesomeIcon
                    size='2x'
                    style={{ cursor: "pointer", color: "black" }}
                    icon={icon}
                />
            </a>
        )
    }

    function renderTopContainer() {
        return (
            <TopContainer>
                {renderIcon("https://www.linkedin.com/in/heardjonathan", faLinkedinIn)}
                {renderIcon("https://github.com/jonath92", faGithub)}
            </TopContainer>
        )
    }

    function renderVerticalBar() {
        return (
            <P mdOnly> &nbsp; | &nbsp; </P>
        )
    }

    function renderBottomContainer() {
        return (
            <BottomContainer>
                <P>&copy; Jonathan Heard</P>
                {renderVerticalBar()}
                <StyledLink to="/disclaimer">Disclaimer</StyledLink>
                {renderVerticalBar()}
                <StyledLink to="/copyrights">Image and Media Copyrights
                </StyledLink>
            </BottomContainer>
        )
    }

    return (
        <OuterContainer>
            {renderTopContainer()}
            {renderBottomContainer()}
        </OuterContainer>
    )
}

export { Footer }