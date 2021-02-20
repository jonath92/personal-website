import React from 'react'
import styled from 'styled-components/macro'

import screenshot1 from '../images/ScreenshotRadio1.png'
import screenshot2 from '../images/ScreenshotRadio2.png'
import screenshot3 from '../images/ScreenshotRadio3.png'


import joplin from '../images/Joplin-icon.svg'
import zugabe from '../images/zugabe.svg'
import eisenhower from '../images/calendar-check-solid.svg'
import chevronLeft from '../images/chevron-circle-left-solid.svg'
import chevronRight from '../images/chevron-circle-right-solid.svg'

import Carousel from 'react-bootstrap/Carousel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const OuterContainer = styled.div` 
    width: 90%;
    max-width: 600px;
`

const RadioComponent = ({ children }) => {
    return (
        <OuterContainer>
            {children}
        </OuterContainer>
    )
}


const RadioCarousel = () => {
    return (
        <Carousel
            interval={null}
            prevIcon={
                <img style={{ width: "30px" }} src={chevronLeft}></img>
            }
            nextIcon={
                <img style={{ width: "30px" }} src={chevronRight}></img>
            }
        >
            {[screenshot1, screenshot2, screenshot3].map(screenshot => {
                return (
                    <Carousel.Item>
                        <img className="d-block w-100" src={screenshot} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}


RadioComponent.Carousel = RadioCarousel

export { RadioComponent }