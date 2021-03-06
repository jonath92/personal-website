import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components/macro'

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

    const {
        img,
        imgWidth,
        title,
        description,
        href
    } = props

    Card.Link = function ({ href }) {
        return (
            <a {...{ href }} className="stretched-link">
                View Details
                {/* <SpanTouchOnly>View Details</SpanTouchOnly> */}
            </a>
        )
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
                <Card.Link {...{ href }} />
            </Card.Body>

        </Card>
    )
}
