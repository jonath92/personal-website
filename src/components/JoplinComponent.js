import React from 'react'
import styled from 'styled-components/macro'
import ListGroup from 'react-bootstrap/ListGroup'

const OuterContainer = styled.div` 
    width: 90%;
    max-width: 600px;
`

const Img = styled.img.attrs(({
    className: "my-3"
}))`
    width: 150px;
    max-width: 50vw
`
const P = styled.p`
    margin: 0;
    padding: 0;
`

function LinksContainer({ links }) {
    return (
        <div>
            {links.map((link, index) => {
                return (
                    <span key={link.text}>
                        <a href={link.href}>{link.text}</a>
                        {index < links.length - 1 &&
                            <span> &nbsp;| &nbsp;</span>}
                    </span>
                )
            })}
        </div>
    )
}

function TechnicsContainer({ technics }) {
    return (
        <div className="my-4">
            <ListGroup horizontal className="mb-1">
                {technics.map(technic => {
                    return (
                        <ListGroup.Item key={technic}>
                            {technic}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            <figcaption className="figure-caption">Used Technics</figcaption>
        </div>
    )
}

function QuoteContainer({ cite, citeReference }) {
    return (
        <blockquote className="blockquote my-4 ">
            {/* mb-0 is used in the bootstrap docs https://getbootstrap.com/docs/4.0/content/typography/#naming-a-source  */}
            <p className="mb-0">{cite}</p>
            <footer className="blockquote-footer">{citeReference}</footer>
        </blockquote>
    )
}

export default function Joplin(props) {
    const {
        heading,
        subHeading,
        links,
        img,
        paragraphs,
        technics,
        cite,
        citeReference,
    } = props

    return (
        <OuterContainer>
            <header>
                <h1>{heading}</h1>
                <h4>{subHeading}</h4>
                <LinksContainer {...{ links }} />
                <Img src={img} />
            </header>

            {paragraphs[0]}

            <TechnicsContainer {...{ technics }} />
            {paragraphs[1]}

            <QuoteContainer {...{ cite }} {...{ citeReference }} />
            {paragraphs[2]}
        </OuterContainer >
    )
}
