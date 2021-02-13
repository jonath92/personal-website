import React from 'react'
import { Card } from 'react-bootstrap'

export default function ProjectCard(props) {

    // TODO calculate imgWidth automatically
    // TODO links as array
    const { img, imgWidth, title, description, link } = props

    return (
        <Card style={{ margin: "1em", padding: "1em" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
                <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: imgWidth }} />
            </div>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={link.href}>{link.text}</Card.Link>

            </Card.Body>

        </Card>
    )
}
