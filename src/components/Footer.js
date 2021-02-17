import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const OuterContainer = styled.section`
    height         : 150px;
    background     : #e9eced;
    display        : flex;
    flex-direction : column;
    flex-shrink: 0;
    align-items    : center;
    justify-content: space-evenly;
    margin-top      :${props => props.marginTop};
    width: 100%;

    @media only screen and (min-width: 768px) {
        height         : 120px;
    }
`
const TopContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    width: ${props => props.width}
`
const BelowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
        flex-direction  : row;
        right    : 52vw;
    }
`
const P = styled.p`
    margin: 0;
    display: ${props => props.mdOnly ? 'none' : 'initial'};
    @media only screen and (min-width: 768px) {
        display  :  initial;
    }
`
const StyledLink = styled(Link)`
    color: black
`

export default function Footer({ marginTop }) {

    function renderIcon(href, icon) {
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

    return (
        <OuterContainer {...{ marginTop }}>
            <TopContainer width="100px">
                {renderIcon("https://www.linkedin.com/in/heardjonathan", faLinkedinIn)}
                {renderIcon("https://github.com/jonath92", faGithub)}
            </TopContainer>

            <BelowContainer>
                <P>&copy; Jonathan Heard</P>
                <P mdOnly>
                    &nbsp; | &nbsp;
                </P>
                <StyledLink to="/disclaimer">
                    Disclaimer
                </StyledLink>
                <P mdOnly>
                    &nbsp; | &nbsp;
                </P>
                <StyledLink to="/copyrights">
                    Image and Media Copyrights
                </StyledLink>

            </BelowContainer>
        </OuterContainer >
    )
}
