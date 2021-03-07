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

                    <img style={{ width: "90%" }} src={valueComplexityGraph}></img>



                    <br>
                    </br>



                    <br>
                    </br>


                    the task are with the smartphone which most people have always

                    Managing personal tasks digital has the benefit that


                    In the past people have managed their tasks primarily with analog notebooks and a lot of people still do this today.

                    <br>
                    </br>

                    <br></br>
                    Applications brings the greatest value to the user when they have the right balance between functionality and complexity.


                    In the past people have used a simple notebooks for managing their tasks which is very simple but

                    <br>

                    </br>
                    {/*  */}
                    Nowadays people use apps such as Trello or Evernote. Both are great Applications but they both have much more features than needed for managing personal tasks / goals as Trello is designed for managing tasks in teams and Evernote is actually a note-taking app. Also most task-management apps allows to categorize their tasks which in my opinion is counterproductive for self time management.





                    In the past people have used a simple notebook for this purpose and nowadays people
        {/* http://mattstockton.com/2013/01/17/the-complexity-vs-value-trap/ */}

                    {/* 
                            Due to this fact many people nowadays managing their tasks with Software which hasn't been designed for this purpose or with no Software at all.


                            Luckily there are well-established approaches which can help us with that. Now it is about time to transfer those methods into the digital age!


                            The Eisenhower Matrix is a very-well thought approach for self-management but there is no widespread app for that. Hopefully I can change that... */}

                </ProjectReport.P>
                <ProjectReport.P>


                    Nowadays people use apps such as Trello or Evernote. Both are great Applications but they both have much more features than needed for managing personal tasks / goals as Trello is designed for managing tasks in teams and Evernote is actually a note-taking app.
                </ProjectReport.P>



            </ProjectReport>
        </PageLayout>
    )
}
