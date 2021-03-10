import React from 'react'
import PageLayout from '../components/PageLayout'
import { ProjectReport } from '../components/ProjectReport'
import { importAllImgFromDirWithoutKey } from '../utils'
import valueComplexityGraph from '../images/value-complexity.svg'

const imgContext = require.context('../images/screenshots/kanban', false, /\.(png|jpe?g|svg)$/)
const screenshots = importAllImgFromDirWithoutKey(imgContext)

export default function Kanban() {
    return (
        <PageLayout>
            <ProjectReport>
                <ProjectReport.Header>
                    <ProjectReport.Title>
                        Personal Task Managment
                    </ProjectReport.Title>
                    <ProjectReport.Subtitle>
                        A responsive Kanban Board for Personal Task Management
                    </ProjectReport.Subtitle>

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
                <ProjectReport.Carousel {...{ screenshots }} />

                <ProjectReport.P>

                    Writting tasks down, helps to keep a clear mind. Using a digital solution for that, has the benefit that listing tasks can be done faster and removes the need of an analog notebook. However it has the disadvantage that writting down tasks gets more complex as analog notebooks have no bugs and no useless features. <a href="https://en.wikipedia.org/wiki/Kanban_board">Kanban Boards</a> are a great way to visualize tasks. Popular Software with Kanban Support are e.g. <a href="https://trello.com">Trello</a> or <a href="https://www.kanbanote.com">Kanbanote</a>. However as Trello is focussing more on managing Tasks in Teams than as Individual it has more features than need for managing personal Tasks. Kanbanote on the other hand is an additon to Evernote and has therefore also much more features than required for managing personal tasks.

                </ProjectReport.P>

                <ProjectReport.BodyImg style={{ width: "80%" }} src={valueComplexityGraph} />

                <ProjectReport.P>
                    The Kanban Board is developed with React and Redux. For the styling I haved used styled components as dynamic styling makes components easily reusable.
                </ProjectReport.P>

                <ProjectReport.TechnicsGroup technics={["React", "Redux", "Styled-components", "Bootstrap"]} />

                <ProjectReport.P>
                    In the future I want to add a login dialogue and save the user Data to google firebase or another Nosql provider. Also I will migrate to Typescript.
                </ProjectReport.P>

            </ProjectReport>
        </PageLayout>
    )
}
