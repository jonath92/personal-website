import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const OuterContainer = styled.section`
    height         : 120px;
    background     : #e9eced;
    display        : flex;
    flex-direction : column;
    align-items    : center;
    justify-content: space-evenly;
    margin-top      :${props => props.marginTop}
`
const TopContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    width: ${props => props.width}
`
const BelowContainer = styled.div`
    display: flex;
    justify-content: center
`
const P = styled.p`
    margin: 0
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
                <P> &nbsp; | &nbsp;  </P>
                <P>Disclaimer</P>
            </BelowContainer>
        </OuterContainer >
    )
}
