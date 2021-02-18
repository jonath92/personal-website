import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const ImageContainer = styled.div`
    width: 100%;
    text-align: center
`

const SpanTouchOnly = styled.div` 

    @media not screen and (pointer: coarse) {
        display: none
    }
`
export default function ProjectCard(props) {

    // TODO calculate imgWidth automatically
    const {
        img,
        imgWidth,
        title,
        description,
        links } = props


    function renderLinks() {
        return links.map(link => {
            return (
                <Card.Link key={uuidv4()} href={link.href}>
                    {link.text}
                </Card.Link>
            )
        })
    }


    return (
        <Card style={{ padding: "1em" }}>
            <ImageContainer>
                <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: imgWidth }} />
            </ImageContainer>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* {renderLinks()} */}
                {/* <Card.Link href={links[0].href}>{links[0].text}</Card.Link> */}
                <a href="/joplin" className="stretched-link">
                    <SpanTouchOnly>View Details</SpanTouchOnly>
                </a>

            </Card.Body>

        </Card>
    )
}
