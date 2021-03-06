import React from 'react'
import ProjectCard from './ProjectCard'

import radioImg from '../images/external/radioapplet-symbolic.svg'
import joplinImg from '../images/external/Joplin-icon.svg'
import zugabeImg from '../images/external/zugabe.svg'
import taskImg from '../images/external/calendar-check-solid.svg'

import styled from 'styled-components/macro'

const GridContainer = styled.div`
    display: flex;
    justify-content: space-around
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    width: ${props => props.width}
`
export default function ProjectGrid({ width }) {

    return (
        <GridContainer>
            <Grid {...{ width }}>

            <ProjectCard
                    img={taskImg}
                    imgWidth="35%"
                    title="Personal Task Managment build with React/Redux"
                    href="/kanban"
                    description={
                        <span>
                            There are plenty of great task management tools available on the market. But most of them focus more on teams than on individuals. This has the disadvantage that these apps are usually unnecessarily complex for managing pesonal tasks and goals. 
                            
                            <br /> <br />

                            For this reason I am currently working on a task management webapp with the focus on personal task management. 

                        </span>
                    }
                />

                <ProjectCard
                    img={radioImg}
                    imgWidth="40%"
                    title="Linux Mint Radio Applet"
                    href="/radio-applet"
                    description={
                        <span>
                            Linux Mint is one of the most popular Linux distributions. A key feature of the distribution is the large number of easy installable extensions such as the Radio Applet.
                        <br /> <br />
                        I have made multiple contributions to the Applet and currently being the official maintainer of the extension.
                    </span>
                    }
                />

                <ProjectCard
                    img={joplinImg}
                    imgWidth="40%"
                    title="Joplin"
                    href="/joplin"
                    description={
                        <span>
                            Joplin is for several reason an outstanding note-taking app. It is open-source, cross plattform and is probably the best note-taking app for developers as the notes are saved in Markdown format.
                        <br /> <br />
                        For the synchronisation users can select from a variety of cloud storage providers. However when I started using Joplin I was frustrated that it was not possible to synchronize attachments larger than 4 MB which I therefore fixed. Since then I also made some other contributions to the project.
                    </span>
                    }
                />

                <ProjectCard
                    img={zugabeImg}
                    imgWidth="40%"
                    title="Zugabe"
                    href="/joplin"
                    description={
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit facere alias, consequuntur laboriosam fugit, dolor quibusdam, cumque repellat commodi dolorem nemo blanditiis molestias exercitationem obcaecati dolores fugiat pariatur vero vel.
                    </span>
                    }
                />


            </Grid>
        </GridContainer>
    )
}
