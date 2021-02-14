import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 100%;
    text-align: center
`

export default function ProjectCard(props) {

    // TODO calculate imgWidth automatically
    // TODO links as array
    const {
        img,
        imgWidth,
        title,
        description,
        link } = props

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
                <Card.Link href={link.href}>{link.text}</Card.Link>

            </Card.Body>

        </Card>
    )
}
