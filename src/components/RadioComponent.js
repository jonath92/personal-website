import React from 'react'
import styled from 'styled-components/macro'

import chevronLeft from '../images/chevron-circle-left-solid.svg'
import chevronRight from '../images/chevron-circle-right-solid.svg'

import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'


const RadioComponent = styled.div` 
    width: 90%;
    max-width: 600px;
    
    P:last-child {
        margin-bottom: 0!important
    }
    
`

RadioComponent.header = styled.div.attrs(({
    className: "mb-3"
}))``

RadioComponent.P = styled.p.attrs(({
    className: "my-3"
}))``

RadioComponent.title = styled.h2``

RadioComponent.subtitle = styled.h4``


RadioComponent.LinksGroup = ({ children }) => {
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                return (
                    <span >
                        {child}
                        {index < children.length - 1 &&
                            <span> &nbsp;| &nbsp;</span>}
                    </span>
                )
            })}
        </div>
    )
}

RadioComponent.Carousel = ({ screenshots }) => {
    return (
        <Carousel
            className="my-4"
            interval={null}
            prevIcon={
                <img style={{ width: "30px" }} src={chevronLeft}></img>
            }
            nextIcon={
                <img style={{ width: "30px" }} src={chevronRight}></img>
            }
        >
            {screenshots.map(screenshot => {
                return (
                    <Carousel.Item key={screenshot}>
                        <img className="d-block w-100" src={screenshot} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

RadioComponent.TechnicsGroup = ({ technics }) => {
    return (
        <div className="my-4">
            <ListGroup horizontal className="mb-1">
                {technics.map(technic => {
                    return (
                        <ListGroup.Item key={technic}>
                            {technic}
                        </ListGroup.Item>
                    )
                })}            </ListGroup>
            <figcaption className="figure-caption">Used Technics</figcaption>
        </div>
    )
}

RadioComponent.Quote = ({ cite, citeReference }) => {
    return (
        <blockquote className="blockquote my-4 ">
            {/* mb-0 is used in the bootstrap docs https://getbootstrap.com/docs/4.0/content/typography/#naming-a-source  */}
            <p className="mb-0">{cite}</p>
            <footer className="blockquote-footer">{citeReference}</footer>
        </blockquote>
    )
}

export { RadioComponent }