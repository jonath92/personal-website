import React from 'react'
import styled from 'styled-components/macro'

import chevronLeft from '../images/chevron-circle-left-solid.svg'
import chevronRight from '../images/chevron-circle-right-solid.svg'

import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'

const ProjectReport = styled.div` 
    width: 90%;
    max-width: 600px;
    
    /* * selects any element - regardless of tag  */
    *:last-child {
        margin-bottom: 0!important
    }
    
`
ProjectReport.Header = styled.div.attrs(({
    className: "mb-3"
}))`
`
ProjectReport.P = styled.p.attrs(({
    className: "my-3"
}))``

ProjectReport.Title = styled.h2``

ProjectReport.Subtitle = styled.h4``

ProjectReport.LinksGroup = ({ children }) => {
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

ProjectReport.Carousel = ({ screenshots }) => {
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

ProjectReport.TechnicsGroup = ({ technics }) => {
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

ProjectReport.Quote = ({ cite, citeReference }) => {
    return (
        <blockquote className="blockquote my-4 ">
            {/* mb-0 is used in the bootstrap docs https://getbootstrap.com/docs/4.0/content/typography/#naming-a-source  */}
            <p className="mb-0">{cite}</p>
            <footer className="blockquote-footer">{citeReference}</footer>
        </blockquote>
    )
}


ProjectReport.HeaderImg = styled.img.attrs(({
    className: "my-3"
}))`
    width: 150px;
    max-width: 50vw
`

ProjectReport.BodyImg = ({ style, src }) => {
    return (
        <div className="my-4" style={{ display: "flex", justifyContent: "center" }}>
            <img {...{ style }} {...{ src }} />
        </div>
    )
}

export { ProjectReport }