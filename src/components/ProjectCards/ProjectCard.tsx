// external dependencies
import { Card } from 'react-bootstrap'
import styled from 'styled-components/macro'
import { useHistory, Link } from 'react-router-dom'

const AnimatedCard = styled.div`
    background   : #FFF;
    margin       : 0 0 20px;
    padding      : 20px;
    border-radius: 2px;
    box-shadow   : 0 2px 4px rgba(0,0,0,0.2);
    cursor       : pointer;
    transition   : 0.3s ease;

    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2),
            0 4px 8px  rgba(0,0,0, 0.2);
    }

    &:active {
        box-shadow      : none;
        transform-origin: center;
        transform       : scale(0.98);
    }

`

const ImageContainer = styled.div`
    width: 100%;
    text-align: center
`
const SpanTouchOnly = styled.div` 
    @media not screen and (pointer: coarse) {
        display: none
    }
`

interface Props {
    img: string,
    imgWidth: string,
    title: string,
    description: JSX.Element,
    href: string
}


const ProjectCard = (props: Props) => {

    const {
        img,
        imgWidth,
        title,
        description,
        href
    } = props

    const history = useHistory();

    return (
        <AnimatedCard onClick={() => history.push(href)} >
            <ImageContainer>
                <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: imgWidth }}
                />
            </ImageContainer>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={href}>
                    <SpanTouchOnly>View Details</SpanTouchOnly>
                </Link>
            </Card.Body>
        </AnimatedCard>
    )
}
export { ProjectCard }