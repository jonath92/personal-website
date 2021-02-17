import React from 'react'
import ProjectCard from './ProjectCard'

import radio from '../images/radioapplet-symbolic.svg'
import joplin from '../images/Joplin-icon.svg'
import zugabe from '../images/zugabe.svg'
import eisenhower from '../images/calendar-check-solid.svg'

import styled from 'styled-components'

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
                    img={radio}
                    imgWidth="40%"
                    title="Linux Mint Radio Applet"
                    links={[
                        {
                            href: "https://cinnamon-spices.linuxmint.com/applets/view/297",
                            text: "View in Cinnamon Store",
                        }
                    ]}
                    description={
                        <span>
                            Linux Mint is one of the most popular Linux distributions. A key feature of the distribution is the large number of easy installable extensions such as the Radio Applet.
                        <br /> <br />
                        I have made multiple contributions to the Applet and currently being the official maintainer of the extension.
                    </span>
                    }
                />

                <ProjectCard
                    img={joplin}
                    imgWidth="40%"
                    title="Joplin"
                    links={[
                        {
                            href: "https://cinnamon-spices.linuxmint.com/applets/view/297",
                            text: "View in Cinnamon Store"
                        }
                    ]}
                    description={
                        <span>
                            Joplin is for several reason an outstanding note-taking app. It is open-source, cross plattform and is probably the best note-taking app for developers as the notes are saved in Markdown format.
                        <br /> <br />
                        For the synchronisation users can select from a variety of cloud storage providers. However when I started using Joplin I was frustrated that it was not possible to synchronize attachments larger than 4 MB which I therefore fixed. Since then I also made some other contributions to the project.
                    </span>
                    }
                />

                <ProjectCard
                    img={zugabe}
                    imgWidth="40%"
                    title="Zugabe"
                    links={[
                        {
                            href: "https://cinnamon-spices.linuxmint.com/applets/view/297",
                            text: "View in Cinnamon Store"
                        }
                    ]}
                    description={
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit facere alias, consequuntur laboriosam fugit, dolor quibusdam, cumque repellat commodi dolorem nemo blanditiis molestias exercitationem obcaecati dolores fugiat pariatur vero vel.
                    </span>
                    }
                />

                <ProjectCard
                    img={eisenhower}
                    imgWidth="35%"
                    title="Eisenhower Matrix"
                    links={[
                        {
                            href: "https://cinnamon-spices.linuxmint.com/applets/view/297",
                            text: "View in Cinnamon Store"
                        }
                    ]}
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
