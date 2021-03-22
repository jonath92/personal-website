// own features
import { ProjectReport } from './ProjectReport'
import * as screenshotsModules from 'assets/images/screenshots/kanban/index'
import valueComplexityGraph from 'assets/images/value-complexity.svg'

const Kanban = () => {

    // TODO move this somehow directly to projectreport
    const screenshots = Object.entries(screenshotsModules).map(screenshotsModul => {
        return screenshotsModul[1]
    })

    function renderHeader() {
        return (
            <ProjectReport.Header>
                <ProjectReport.Title>
                    Personal Task Managment
            </ProjectReport.Title>
                <ProjectReport.SubTitle>
                    A responsive Kanban Board for Personal Task Management

                </ProjectReport.SubTitle>
                <ProjectReport.LinksGroup>
                    <a
                        href="https://github.com/jonath92/eisenhower_react"
                    >
                        View at Github
                        </a>
                    <a
                        href="https://kanban.jonathanheard.com"
                    >
                        View in Action
                        </a>
                </ProjectReport.LinksGroup>
            </ProjectReport.Header>
        )
    }

    function renderCarousel() {
        return (
            <ProjectReport.Carousel {...{ screenshots }} />
        )
    }

    function render1stParagraph() {
        return (
            <ProjectReport.P>
                Writting tasks down helps to keep a clear mind. Using a digital solution for that has the benefit that listing tasks can be done faster and removes the need for an analog notebook. However it has the disadvantage that writting down tasks gets more complex as analog notebooks have no bugs and no useless features. <a href="https://en.wikipedia.org/wiki/Kanban_board">Kanban Boards</a> are a great way to visualize tasks. Popular software with Kanban Support is e.g. <a href="https://trello.com">Trello</a> or <a href="https://www.kanbanote.com">Kanbanote</a>. However as Trello is focussing more on managing tasks in teams than as an individual it has more features than need for managing personal Tasks. Kanbanote on the other hand is an additon to Evernote and has therefore also many more features than required for managing personal tasks.
            </ProjectReport.P>
        )
    }


    function renderBodyImg() {
        return (
            <ProjectReport.BodyImgContainer>
                <img style={{ width: "80%" }} src={valueComplexityGraph} alt="" />
            </ProjectReport.BodyImgContainer>
        )
    }

    function render2ndParagraph() {
        return (
            <ProjectReport.P>
                The Kanban Board is developed with React and Redux. For the styling I haved used styled components as dynamic styling makes components easily reusable.
            </ProjectReport.P>
        )
    }

    function renderTechnicsGroup() {
        return (
            <ProjectReport.TechnicsGroup technics={["React", "Redux", "Styled-components", "Bootstrap"]} breakpoint='md' />


        )
    }

    function render3rdParagraph() {
        return (

            <ProjectReport.P>
                In the future I want to add a login dialogue and save the user Data to Google Firebase or another Nosql provider. Also I will migrate to Typescript.
            </ProjectReport.P>
        )
    }




    return (
        <ProjectReport>

            {renderHeader()}
            {renderCarousel()}
            {render1stParagraph()}
            {renderBodyImg()}
            {render2ndParagraph()}
            {renderTechnicsGroup()}
            {render3rdParagraph()}
        </ProjectReport>
    )
}

export { Kanban }