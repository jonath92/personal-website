// own features
import { ProjectCard } from './ProjectCard'
import { joplinIcon } from 'assets/images/external/index'

const JoplinCard = () => {
    return (
        <ProjectCard
            img={joplinIcon}
            imgWidth="35%"
            title="Joplin"
            description={
                <span>
                    Joplin is for several reason an outstanding note-taking app. It is open-source, cross plattform and is probably the best note-taking app for developers as the notes are saved in Markdown format.
                    <br /> <br />
                    For the synchronisation users can select from a variety of cloud storage providers. However when I started using Joplin I was frustrated that it was not possible to synchronize attachments larger than 4 MB which I therefore fixed. Since then I also made some other contributions to the project.
                </span>
            }
            href="/joplin"
        />
    )
}

export { JoplinCard }