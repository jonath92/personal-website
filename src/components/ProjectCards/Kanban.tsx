// own features
import { ProjectCard } from './ProjectCard'
import { taskIcon } from 'assets/images/external/index'
import { links } from 'types'

const KanbanCard = () => {
    return (
        <ProjectCard
            img={taskIcon}
            imgWidth="35%"
            title="Responsive Kanban Board build with React"
            description={
                <span>
                    Kanban boards are a great way to visualize and manage tasks. Most apps for this purpose on the market however focus more on teams than on individuals and are therefore unnecessarily complex for managing pesonal tasks or are not responsive.
                    <br /> <br />
                    For this reason I am currently working on a Kanban webapp with the focus on personal task management.
                </span>
            }
            href={links.kanban.location}
        />
    )
}

export { KanbanCard }