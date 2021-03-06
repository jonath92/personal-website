import React from 'react'
import PageLayout from '../components/PageLayout'
import { ProjectReport } from '../components/ProjectReport'
import { importAllImgFromDirWithoutKey } from '../utils'

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

                <ProjectReport.P>
                    {/* 
                            Due to this fact many people nowadays managing their tasks with Software which hasn't been designed for this purpose or with no Software at all.


                            Luckily there are well-established approaches which can help us with that. Now it is about time to transfer those methods into the digital age!


                            The Eisenhower Matrix is a very-well thought approach for self-management but there is no widespread app for that. Hopefully I can change that... */}

                </ProjectReport.P>


                <ProjectReport.Carousel {...{ screenshots }} />
            </ProjectReport>
        </PageLayout>
    )
}
