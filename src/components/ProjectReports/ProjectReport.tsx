// external dependencies
import React from 'react';
import styled from 'styled-components/macro'
import ListGroup, { ListGroupProps } from 'react-bootstrap/ListGroup'
import BootstrapCarousel from 'react-bootstrap/Carousel'

// // own features
import chevronLeft from 'assets/images/external/chevron-circle-left-solid.svg'
import chevronRight from 'assets/images/external/chevron-circle-right-solid.svg'

// styles
const ReportLayout = styled(styled.div``)`
    width: 90%;
    max-width: 600px;
    padding-bottom: 30px;

    /* * selects any element - regardless of tag  */
    *:last-child {
        margin-bottom: 0!important
    }
`

const Header = styled.div.attrs({
    className: "mb-3"
})``

const HeaderImg = styled.img.attrs(({
    className: "my-3"
}))`
    width: 150px;
    max-width: 50vw
`

const P = styled.p.attrs(({
    className: "my-3"
}))``

const SubTitle = styled.h4`
    a {
        text-decoration: none;
         color: #212529 
    }
`

const BodyImgContainer = styled.div.attrs({
    className: 'my-5'
})` 
    display: flex;
    justify-content: space-around
`

// Components
interface ProjectReportProps {
    children: JSX.Element | JSX.Element[] | string;
}

const ProjectReport = ({ children }: ProjectReportProps) => (
    <ReportLayout>
        {children}
    </ReportLayout>
);

const LinksGroup = ({ children }: any) => {
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

interface TechnisGroupProps {
    technics: string[]
    /** By default the technics group is shown horizontal but this can lead to overflow at small devices. With the breakpoint it can be set when the group shall starting to show horicontal. TODO: calculate automatically   */
    breakpoint?: ListGroupProps["horizontal"]
}


const TechnicsGroup = (props: TechnisGroupProps) => {

    const {
        technics,
        breakpoint
    } = props

    return (
        <div className="my-4">
            <ListGroup horizontal={breakpoint || true} className="mb-1">
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

interface QuoteProps {
    cite: string,
    /**
     * citeReference should include the link when possible
     */
    citeReference: JSX.Element | JSX.Element[] | string
}

const Quote = (props: QuoteProps) => {
    const {
        cite,
        citeReference } = props

    return (
        <blockquote className="blockquote my-4 ">
            {/* mb-0 is used in the bootstrap docs https://getbootstrap.com/docs/4.0/content/typography/#naming-a-source  */}
            <p className="mb-0">{cite}</p>
            <footer className="blockquote-footer">{citeReference}</footer>
        </blockquote>
    )
}

interface CarouselProps {
    screenshots: string[]
}

const Carousel = (props: CarouselProps) => {
    const { screenshots } = props

    return (
        <BootstrapCarousel
            className="my-4"
            interval={null}
            prevIcon={
                <img style={{ width: "30px" }} src={chevronLeft} alt=""></img>
            }
            nextIcon={
                <img style={{ width: "30px" }} src={chevronRight} alt=""></img>
            }
        >
            {screenshots.map(screenshot => {
                return (
                    <BootstrapCarousel.Item key={screenshot}>
                        <img className="d-block w-100" src={screenshot} alt="" />
                    </BootstrapCarousel.Item>
                )
            })}

        </BootstrapCarousel>
    )

}

ProjectReport.Header = Header;
ProjectReport.Title = styled.h2``
ProjectReport.SubTitle = SubTitle
ProjectReport.HeaderImg = HeaderImg
ProjectReport.LinksGroup = LinksGroup
ProjectReport.P = P
ProjectReport.TechnicsGroup = TechnicsGroup
ProjectReport.Quote = Quote
ProjectReport.Carousel = Carousel
ProjectReport.BodyImgContainer = BodyImgContainer


export { ProjectReport }